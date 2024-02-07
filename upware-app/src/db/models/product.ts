import { ObjectId } from "mongodb";

export interface Products {
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