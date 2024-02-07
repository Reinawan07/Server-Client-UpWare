import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { hashText } from "../helpers/hash";

export interface UserInterface {
    _id: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string;
};

type NewInput = Omit<UserInterface, "_id">

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
        }) as UserInterface | null;
    }

    static async register(newUser: NewInput) {
       const result = await this.getCollection().insertOne({
        ...newUser, password: hashText(newUser.password)});
       
       return {
            _id: result.insertedId,
            ...newUser
       } as UserInterface; 
    }
}

export default UserModel