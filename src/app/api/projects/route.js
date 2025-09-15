// /app/api/projects/route.js

export async function GET() {
    try {
        const res = await fetch("http://136.244.85.31/api/v1/projects", {
            cache: "no-store",
        });

        if (!res.ok) {
            return Response.json(
                { message: "Failed to fetch projects", status: res.status },
                { status: res.status }
            );
        }

        const data = await res.json();
        return Response.json(data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        return Response.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
}