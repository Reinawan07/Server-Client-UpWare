import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

export interface UserInterface {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
}

class UserModel {
    static getCollection() {
        return database.collection("users");
    }

    static async getAll() {
        return await this.getCollection().find().toArray() as UserInterface[];
    }

    static async getById(id: string) {
        return await this.getCollection().findOne({
            _id: new ObjectId(id)
        }) as UserInterface;
    }

    static async register(userData: UserInterface) {
        return await this.getCollection().insertOne(userData);

    }
}

export default UserModel