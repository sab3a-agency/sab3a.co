// src/app/api/projects/[id]/route.js

import { NextResponse } from 'next/server';


export async function GET(request) {
    const { pathname } = new URL(request.url);
    const id = pathname.split('/').pop();

    if (!id) {
        return NextResponse.json({ message: "ID parameter is missing" }, { status: 400 });
    }

    try {
        const response = await fetch(`http://136.244.85.31/api/v1/projects/${id}`);
        const data = await response.json();

        if (response.status !== 200) {
            return NextResponse.json({ message: "Failed to fetch project from external API", error: data.message }, { status: response.status });
        }

        return NextResponse.json(data, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Failed to fetch project", error: err.message }, { status: 500 });
    }
}