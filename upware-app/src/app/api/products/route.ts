import ProductModel, { ProductsInterface } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export type MyResponse<T> = {
    message?: string;
    error?: string;
    data?: T | null | undefined;
};

export async function GET(request: NextRequest) {
    const searchQuery = request.nextUrl.searchParams;
    const search = searchQuery.get("search")?.toString();
    const page = parseInt(searchQuery.get("page") || "1");
    const limit = parseInt(searchQuery.get("limit") || "8");
    const data = await ProductModel.getAll(search, page, limit);
    return NextResponse.json<MyResponse<ProductsInterface[]>>({ data });
}
