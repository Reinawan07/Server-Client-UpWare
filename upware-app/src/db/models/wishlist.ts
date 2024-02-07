import { ObjectId } from "mongodb";

export interface Wishlist {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: string;
    updatedAt: string;
}