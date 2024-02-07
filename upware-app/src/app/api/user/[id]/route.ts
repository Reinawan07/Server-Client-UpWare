import UserModel from "@/db/models/user";

export async function GET(
    request: Request, {params}: { params: {id: string}}) {
    const user = await UserModel.getById(params.id);
    return Response.json({
        data: user,
    })
}