// app/api/projects/route.js
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // جلب البيانات من الخادم الخارجي
        const res = await fetch("https://admin.sab3a.co/api/v1/faqs", {
            cache: "no-store",
        });

        if (!res.ok) {
            return NextResponse.json(
                { message: "Failed to fetch FAQs", status: res.status },
                { status: res.status }
            );
        }

        const data = await res.json();

        // إعادة نفس هيكلية الـ response مع CORS
        return NextResponse.json(
            {
                code: data.code,
                message: data.message,
                data: {
                    items: data.data.items,
                },
            },
            { headers: { "Access-Control-Allow-Origin": "*" } }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}
