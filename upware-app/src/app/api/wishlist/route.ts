import WishlistModel from '@/db/models/wishlist';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
	try {
		const userId = req.headers.get('x-user-id') as string;
		// console.log(userId, 'userId wishlist');

		const wishlist: WishlistModel[] = await WishlistModel.getWishlists(userId);

		return NextResponse.json(
			{
				message: 'Wishlist',
				data: wishlist,
			},
			{
				status: 200,
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
