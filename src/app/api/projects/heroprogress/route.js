import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("https://admin.sab3a.co/api/v1/homepage", {
            cache: "no-store",
        });
        const data = await res.json();


        const filtered = data?.data?.statistics?.filter((s) =>
            [5, 6, 7, 8].includes(s.id)
        );

        return NextResponse.json({
            success: true,
            data: { statistics: filtered },
        });
    } catch (error) {
        console.error("API Fetch Error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch data" },
            { status: 500 }
        );
    }
}
