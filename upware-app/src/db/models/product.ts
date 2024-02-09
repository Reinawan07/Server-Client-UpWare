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

    static async getBySlug(slug: string) {
        return await this.getCollection().findOne({
            slug
        }) as ProductsInterface | null;
    }

    static async getById(id: string) {
        return await this.getCollection().findOne({
            _id: new ObjectId(id)
        }) as ProductsInterface | null
    }
}

export default ProductModel