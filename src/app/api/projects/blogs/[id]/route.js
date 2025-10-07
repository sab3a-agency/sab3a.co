import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;

    try {

        const res = await fetch(`https://admin.sab3a.co/api/v1/blogs/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog with id ${id}`);
        }

        const data = await res.json();


        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: 500 }
        );
    }
}
