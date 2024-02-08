import UserModel from "@/db/models/user";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const users = await UserModel.getAll();
    return NextResponse.json({
        data: users,
    })
}