import { ObjectId } from "mongodb";

export interface WishlistModel {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: string;
    updatedAt: string;
}