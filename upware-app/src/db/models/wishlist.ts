import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

export interface WishlistInterface {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: string;
    updatedAt: string;
}

class WishlistModel {
    static getCollection() {
        return database.collection("wishlists");
    }

    static async getAll() {
        return await this.getCollection().find().toArray() as WishlistInterface[]
    }

    static async getBySlug(slug: string) {
        return await this.getCollection().findOne({
            slug
        }) as WishlistInterface | null;
    }
}

export default WishlistModel