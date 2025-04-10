import { ratelimit } from '@/utils/limiter'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    console.log("Have req");
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';

    const { success, limit, reset, remaining } = await ratelimit.limit(ip)
    if (!success) {
        return NextResponse.json("Rate Limited", { status: 429 })
    }
    return NextResponse.json("Ok", { status: 200 })
}

// กำหนด path ที่จะให้ middleware ทำงาน
export const config = {
    matcher: ['/Contact', '/Contact/:path*','/app','/app/:path*'], // 👈 path ที่จะ "เรียก" middleware
};