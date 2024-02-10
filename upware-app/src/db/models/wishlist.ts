import { ObjectId } from "mongodb";
import { database } from "../config/mongodb";
import { ProductsInterface } from "./product";

export interface NewWishlist {
    userId: string;
    productId: string;
}

export interface WishlistInterface extends NewWishlist {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    product: ProductsInterface;
}

class WishlistModel {
    static getCollection() {
        return database.collection("wishlists");
    }

    static async getWishlists(userId: string): Promise<WishlistInterface[]> {
        const response = await this.getCollection().aggregate([
            { $match: { userId: new ObjectId(userId) } },
            {
                $lookup: {
                    from: 'products',
                    foreignField: '_id',
                    localField: 'productId',
                    as: 'product',
                },
            },
            {
                $unwind: {
                    path: '$product',
                    preserveNullAndEmptyArrays: true,
                },
            },
        ]).toArray();

        return response as WishlistInterface[];
    }

    static async addWislist(data: NewWishlist) {
        const currentDate = new Date();
        const response = await this.getCollection()
            .insertOne({
                userId: new ObjectId(data.userId),
                productId: new ObjectId(data.productId),
                createdAt: currentDate,
                updatedAt: currentDate,
            });
        return response;
    }
}

export default WishlistModel
