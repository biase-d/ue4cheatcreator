import { createPool } from '@vercel/postgres';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const { titleId, gameName, presetName, configJson, author } = await request.json();
  const db = createPool();

  try {
    const gameRes = await db.query(`
      INSERT INTO games (title_id, game_name) VALUES ($1, $2)
      ON CONFLICT (title_id) DO UPDATE SET last_updated = NOW()
      RETURNING id;
    `, [titleId, gameName]);
    
    const gameDbId = gameRes.rows[0].id;

    await db.query(`
      INSERT INTO presets (game_id, name, config_json, author)
      VALUES ($1, $2, $3, $4)
    `, [gameDbId, presetName, JSON.stringify(configJson), author || 'Anonymous']);

    return json({ success: true });
  } catch (error) {
    console.error("Save Preset Error:", error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET({ url }) {
  const gameName = url.searchParams.get('gameName');
  const db = createPool();
  
  try {
    const res = await db.query(`
      SELECT p.id, p.name, p.config_json, p.downloads, p.author, p.created_at
      FROM presets p
      JOIN games g ON p.game_id = g.id
      WHERE g.game_name = $1
      ORDER BY p.created_at DESC
      LIMIT 50
    `, [gameName]);

    return json(res.rows);
  } catch (error) {
    console.error("Fetch Presets Error:", error);
    return json([]);
  }
}