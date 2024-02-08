import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";

export interface ProductsInterface {
    _id: ObjectId;
    name: string;
    price: number;
    thumbnail: string;
    excerpt: string;
    description: string;
    slug: string;
    tags: string[];
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

class ProductModel {
    static getCollection() {
        return database.collection("products");
    }

    static async getAll() {
        return await this.getCollection().find().toArray() as ProductsInterface[]
    }
}

export default ProductModel