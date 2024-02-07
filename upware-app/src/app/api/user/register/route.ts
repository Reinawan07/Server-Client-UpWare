import UserModel from "@/db/models/user";

export async function POST(request: Request){
    const body = await request.json();
    console.log(body);
    const result = await UserModel.register(body);

    return Response.json({
        data: {},
    });
    
}