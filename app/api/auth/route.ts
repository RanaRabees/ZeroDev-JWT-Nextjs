import { sign } from "jsonwebtoken"
import { NextResponse } from "next/server"
import { serialize } from "cookie";
export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;
    if (username != 'RanaRabees' || password != 'RanaRabees') {
        return NextResponse.json(
            {
                message: "Unauthorized Bhia G Ha Ha Ha👻👻👻",
            },
            {
                status: 401,
            }
        )
    }
    const secret = process.env.JWT_SECRET || "as00";
    const token = sign(
        {
            username: username,
            id: 1,
        },
        secret,
        {
            expiresIn: 24 * 60 * 60
        }
    )
    const serialized = serialize("Rabees_JWT_Token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
    });
    const response = {
        message: "Authenticated! Ha Ha Ha👻👻👻"
    }
    return new Response(JSON.stringify(response), {
        status: 200,
        headers: { "Set-Cookie": serialized }
    });
}
