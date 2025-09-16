import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;

    try {
        // نداء مباشر للـ API تبع الباك إند
        const res = await fetch(`http://136.244.85.31/api/v1/blogs/${id}`, {
            cache: "no-store", // علشان ما يخزن الكاش
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog with id ${id}`);
        }

        const data = await res.json();

        // لو الـ API بيرجع blog داخل data
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}
