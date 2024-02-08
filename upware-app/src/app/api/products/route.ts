import ProductModel from "@/db/models/product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const products = await ProductModel.getAll();
    return NextResponse.json({
        data: products,
    })
}