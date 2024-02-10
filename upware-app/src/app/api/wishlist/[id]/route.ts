import ProductModel, { ProductsInterface } from '@/db/models/product';
import WishlistModel from '@/db/models/wishlist';
import { NextResponse } from 'next/server';

export async function POST(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id: productId } = params;
        const product: ProductsInterface | null = await ProductModel.getById(productId);

        if (product === null) {
            return NextResponse.json(
                {
                    message: 'Product not found',
                },
                {
                    status: 404,
                }
            );
        }

        const userId = req.headers.get('x-user-id') as string;
        const wishlistProduct = await WishlistModel.getWishlists(userId);

        const isProductInWishlist = wishlistProduct.some(wishlistItem => wishlistItem.productId.toString() === productId);

        if (isProductInWishlist) {
            return NextResponse.json(
                {
                    message: 'Product already exists in wishlist',
                },
                {
                    status: 400,
                }
            );
        }

        await WishlistModel.addWislist({ productId, userId });

        return NextResponse.json(
            {
                message: 'Success add to wishlist',
            },
            {
                status: 201,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: 'Internal Server Error',
            },
            {
                status: 500,
            }
        );
    }
}



export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const userId = req.headers.get('x-user-id') as string;

        await WishlistModel.deleteWishlist({ productId: id, userId });

        return NextResponse.json(
            {
                message: 'Success to delete wishlist',
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        console.error('Error deleting wishlist:', error);
        return NextResponse.json(
            {
                message: 'Internal Server Error',
            },
            {
                status: 500,
            }
        );
    }
}