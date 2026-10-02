import pool from "@/lib/db";


export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    const result = await pool.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );

    return Response.json(result.rows[0]);
}

export async function DELETE(request: Request, context: { params: Promise<{ id: string }> }) {


    const { id } = await context.params;

    await pool.query(
        "DELETE FROM users WHERE id = $1",
        [id]
    )

    return Response.json({
        message: "User deleted"
    })
}