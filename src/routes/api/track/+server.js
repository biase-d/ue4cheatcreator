import { createPool } from '@vercel/postgres';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const { titleId, gameName } = await request.json();
  const db = createPool();

  try {
    await db.query(`
      INSERT INTO games (title_id, game_name, generation_count, last_updated)
      VALUES ($1, $2, 1, NOW())
      ON CONFLICT (title_id) 
      DO UPDATE SET 
        generation_count = games.generation_count + 1,
        last_updated = NOW(),
        game_name = EXCLUDED.game_name;
    `, [titleId, gameName]);

    return json({ success: true });
  } catch (error) {
    console.error("Tracking Error:", error);
    return json({ success: false, error: error.message }, { status: 500 });
  }
}