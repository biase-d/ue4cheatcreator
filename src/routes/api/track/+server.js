import { json } from '@sveltejs/kit';

export async function POST({ request, platform }) {
  if (!platform?.env?.DB) {
    return json({ success: false, error: "Database not configured" }, { status: 500 });
  }

  const { titleId, gameName } = await request.json();
  const db = platform.env.DB;

  try {
    await db.prepare(`
      INSERT INTO games (title_id, game_name, generation_count, last_updated)
      VALUES (?, ?, 1, CURRENT_TIMESTAMP)
      ON CONFLICT (title_id) 
      DO UPDATE SET 
        generation_count = games.generation_count + 1,
        last_updated = CURRENT_TIMESTAMP,
        game_name = excluded.game_name
    `).bind(titleId, gameName).run();

    return json({ success: true });
  } catch (error) {
    console.error("Tracking Error:", error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}