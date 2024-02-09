import ListWishlist from "@/components/ListWishlist";
import { WishlistInterface } from "@/db/models/wishlist";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'UpWare - Wishlist',
  description: 'UpWare Wishlist',
}


async function getWishlist(): Promise<WishlistInterface[]> {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", { cache: "no-store" });
    return response.json();
}


export default async function Wishlist() {
    const wishlists = await getWishlist();

    return (
        <>
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Deskription</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    {wishlists.map((wishlist) => (
                        <ListWishlist wishlist={wishlist} />
                    ))}

                </table>
            </div>
        </>
    )
}