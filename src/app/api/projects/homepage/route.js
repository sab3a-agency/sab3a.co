// app/api/projects/homePage/route.js
import { NextResponse } from "next/server";

export const API_BASE_URL = "https://admin.sab3a.co/";
export async function GET() {
    try {
        const res = await fetch(`${API_BASE_URL}api/v1/homepage`, {
            cache: "no-store",
        });

        if (!res.ok) {
            return NextResponse.json(
                {
                    code: res.status,
                    message: "Upstream API failed",
                    data: null,
                },
                { status: res.status }
            );
        }

        const data = await res.json();

        return NextResponse.json({
            code: 200,
            message: "Homepage data fetched successfully",
            data: data.data,
        });
    } catch (err) {
        return NextResponse.json(
            {
                code: 500,
                message: err.message,
                data: null,
            },
            { status: 500 }
        );
    }
}