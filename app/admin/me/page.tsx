import { verify } from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers'
import React from 'react'
import Link from 'next/link';
function Page(request: NextRequest) {
    let data: any = undefined;
    try {
        const secret = process.env.JWT_SECRET || "as00";
        const cookieStore = cookies()
        const cookie = cookieStore.get('Rabees_JWT_Token')
        const token: any = cookie?.value;
        data = verify(token, secret);
    } catch (err) {
        console.log("ERROR: ", err)
    }
    return (
        <>{data && <div>
            <div>Me</div>
            <div>User: {data?.username}</div>
            <div>User ID: {data?.id}</div>
        </div>
        }
            {
                !data &&
                <Link href="/">Login</Link>
            }
        </>
    )
}
export default Page