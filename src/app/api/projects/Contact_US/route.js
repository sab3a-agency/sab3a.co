import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json(); // قراءة body من الفورم

        const res = await fetch("https://admin.sab3a.co/api/v1/contact-us", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        let data;
        try {
            data = await res.json();
        } catch {
            const text = await res.text();
            return NextResponse.json(
                { message: "API لم يُرجع JSON", details: text },
                { status: res.status }
            );
        }

        if (!res.ok) {
            return NextResponse.json(
                { message: data.message || "فشل إرسال البيانات" },
                { status: res.status }
            );
        }

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "خطأ في الخادم", error: error.message },
            { status: 500 }
        );
    }
}
