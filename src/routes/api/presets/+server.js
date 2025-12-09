import { json } from '@sveltejs/kit';

export async function POST({ request, platform }) {
  if (!platform?.env?.DB) {
    return json({ success: false, error: "Database not configured" }, { status: 500 });
  }

  const { titleId, gameName, presetName, configJson, author, isGlobal } = await request.json();
  const db = platform.env.DB;

  try {
    await db.prepare(`
      INSERT INTO games (title_id, game_name) VALUES (?, ?)
      ON CONFLICT (title_id) DO UPDATE SET last_updated = CURRENT_TIMESTAMP
    `).bind(titleId, gameName).run();

    const game = await db.prepare(`SELECT id FROM games WHERE title_id = ?`).bind(titleId).first();
    
    if (!game) throw new Error("Failed to retrieve game ID");

    await db.prepare(`
      INSERT INTO presets (game_id, name, config_json, author, is_global)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      game.id, 
      presetName, 
      JSON.stringify(configJson), 
      author || 'Anonymous', 
      isGlobal ? 1 : 0
    ).run();

    return json({ success: true });
  } catch (error) {
    console.error("Save Preset Error:", error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET({ url, platform }) {
  if (!platform?.env?.DB) {
    return json([]);
  }

  const gameName = url.searchParams.get('gameName');
  const db = platform.env.DB;
  
  try {
    const { results } = await db.prepare(`
      SELECT p.id, p.name, p.config_json, p.downloads, p.author, p.created_at, p.is_global
      FROM presets p
      JOIN games g ON p.game_id = g.id
      WHERE g.game_name = ? OR p.is_global = 1
      ORDER BY p.is_global DESC, p.created_at DESC
      LIMIT 50
    `).bind(gameName).all();

    return json(results);
  } catch (error) {
    console.error("Fetch Presets Error:", error);
    return json([]);
  }
}