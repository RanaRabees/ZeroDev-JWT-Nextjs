import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
    if (request.cookies.has('Rabees_JWT_Token')) {
        // let cookie = request.cookies.get('Rabees_JWT_Token')
        // // console.log(cookie) // => { name: 'Rabees_JWT_Token', value:
        // 'ebmneheheiuiy678eiu', Path: '/';
        // }
        // const {value}:any = cookie;
        // console.log(value)
        // // request.cookies.delete('nextjs')
        // request.token = value;
    } else {
        return new NextResponse(
            JSON.stringify({ success: false, message: 'Unauthorized' }),
            { status: 401, headers: { 'content-type': 'application/json' } }
        )
    }
}

export const config = {
    matcher: '/admin/:path*',
}