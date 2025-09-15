// src/app/api/projects/[id]/route.js

import { NextResponse } from 'next/server';

export async function GET(request) {
    const { pathname } = new URL(request.url);
    const id = pathname.split('/').pop();

    if (!id) {
        return NextResponse.json({ message: "ID parameter is missing" }, { status: 400 });
    }

    try {
        // طلب للباك اند الأصلي
        const response = await fetch(`http://136.244.85.31/api/v1/projects/${id}`);
        const data = await response.json();

        if (response.status !== 200) {
            return NextResponse.json(
                { message: "Failed to fetch project from external API", error: data.message },
                { status: response.status }
            );
        }

        // تصحيح روابط الصور لتستخدم "/" بدل "\"
        if (data.data) {
            if (data.data.cover_image) {
                data.data.cover_image = data.data.cover_image.replace(/\\/g, '/');
            }
            if (data.data.images && Array.isArray(data.data.images)) {
                data.data.images = data.data.images.map(img => img.replace(/\\/g, '/'));
            }
        }

        return NextResponse.json(data, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: "Failed to fetch project", error: err.message },
            { status: 500 }
        );
    }
}
