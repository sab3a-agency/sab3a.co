// app/api/blogs/route.js
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("http://136.244.85.31/api/v1/blogs", {
            cache: "no-store", // عشان ما يجيب كاش
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
