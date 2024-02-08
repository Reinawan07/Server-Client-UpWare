import UserModel from "@/db/models/user";
import { ZodError } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const result = await UserModel.register(body);

        return Response.json({
            data: result,
        });
    } catch (error) {

        if (error instanceof ZodError) {
            console.log(error);
            const errMessage = error.errors[0].path[0] + " " + error.errors[0].message;
            return Response.json({
                error: errMessage
            }, {
                status: 400
            })
        }
    }

}