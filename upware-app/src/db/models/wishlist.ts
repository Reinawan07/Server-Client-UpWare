import { ObjectId } from "mongodb";

export interface WishlistInterface {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: string;
    updatedAt: string;
}