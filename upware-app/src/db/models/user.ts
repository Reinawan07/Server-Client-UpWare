import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { hashText } from "../helpers/hash";
import { z } from "zod";
import { NextResponse } from "next/server";

const userSchema = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(5)
});

export interface UserInterface {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
};

export type NewInput = Omit<UserInterface, "_id">;

class UserModel {
    static getCollection() {
        return database.collection("users");
    }

    static async getAll() {
        return await this.getCollection().find().project({ password: 0 }).toArray() as UserInterface[];
    }

    static async getById(id: string) {
        return await this.getCollection().findOne({
            _id: new ObjectId(id)
        }, { projection: { password: 0 } }) as UserInterface | null;
    }

    static async getUserByUsername(username: string) {
        return await this.getCollection().findOne({
            username: username
        }) as UserInterface | null;
    }

    static async getUserByEmail(email: string) {
        return await this.getCollection().findOne({
            email: email
        }) as UserInterface | null;
    }

    static async register(newUser: NewInput) {
        const existingUserByUsername = await this.getUserByUsername(newUser.username);
        const existingUserByEmail = await this.getUserByEmail(newUser.email);

        if (existingUserByUsername || existingUserByEmail) {
            return NextResponse.json(
                {
                    message: "Username or email already exists"
                },
                { status: 400 }
            )
        }

        const parsed = userSchema.safeParse(newUser);
        if (!parsed.success) {
            throw parsed.error;
        }

        const result = await this.getCollection().insertOne({
            ...newUser, password: hashText(newUser.password)
        });

        return {
            _id: result.insertedId,
            ...newUser
        } as UserInterface;
    }
}

export default UserModel;
