import { NextResponse } from "next/server";
import { API_BASE_URL } from "../../homepage/route";

export async function GET(request, { params }) {
    const { id } = params;

    try {

        const res = await fetch(`${API_BASE_URL}api/v1/blogs/${id}`, {
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
