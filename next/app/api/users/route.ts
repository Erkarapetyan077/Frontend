import pool from "@/lib/db";

export async function GET() {
    const result = await pool.query("SELECT * FROM users");

    return Response.json(result.rows);
}

export async function POST(request: Request) {

    const body = await request.json()

    const result = await pool.query(
        "INSERT INTO users (name, email, username) VALUES ($1, $2, $3) RETURNING *",
        [body.name, body.email, body.username]
    )

    return Response.json(result.rows[0]);
}