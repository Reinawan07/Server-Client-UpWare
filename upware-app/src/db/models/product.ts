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

  static async getAll(search?: string, page: number = 1, limit: number = 8): Promise<ProductsInterface[]> {
    const skip = (page - 1) * limit;
    if (search) {
      const filter = { name: { $regex: search, $options: "i" } };
      return await this.getCollection().find(filter).skip(skip).limit(limit).toArray();
    } else {
      return await this.getCollection().find().skip(skip).limit(limit).toArray();
    }
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