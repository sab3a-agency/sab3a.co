// app/api/blogs/route.js
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/blogs`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: "Upstream API failed", status: res.status },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
