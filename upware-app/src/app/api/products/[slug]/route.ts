import ProductModel from "@/db/models/product";
import { NextResponse } from "next/server";


export async function GET(
    request: Request, { params }: { params: { slug: string } }) {
    const product = await ProductModel.getBySlug(params.slug);
    return NextResponse.json({
        data: product
    })
}
