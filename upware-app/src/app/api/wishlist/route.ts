import WishlistModel from "@/db/models/wishlist";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const wishlist = await WishlistModel.getAll();
    return NextResponse.json({
        data: wishlist,
    })
}