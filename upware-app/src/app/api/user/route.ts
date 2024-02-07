import UserModel from "@/db/models/user";

export async function GET(request: Request) {
    const users = await UserModel.getAll();
    return Response.json({
        data: users,
    })
}