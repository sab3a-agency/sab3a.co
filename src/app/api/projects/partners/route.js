import { NextResponse } from "next/server";
import { API_BASE_URL } from "../homepage/route";

export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}api/v1/partners`, {
            cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch partners");

        const data = await res.json();


        const partners = data?.data?.items?.map((item) => ({
            id: item.id,
            src: item.logo.replace(/\\/g, "/"),
            link: item.url,
        }));

        return NextResponse.json({ partners });
    } catch (error) {
        console.error("Error in API route:", error);

        return NextResponse.json(
            { partners: [], error: error.message },
            { status: 500 }
        );
    }
}
