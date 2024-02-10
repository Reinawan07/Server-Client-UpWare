import ListWishlist from "@/components/ListWishlist";
import { WishlistInterface } from "@/db/models/wishlist";
import type { Metadata } from 'next'
import { cookies } from "next/headers";
 
export const metadata: Metadata = {
  title: 'UpWare - Wishlist',
  description: 'UpWare Wishlist',
}

async function getWishlist(): Promise<{ data: WishlistInterface[]}> {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", {
        method: "GET",
        headers: {
            Cookie: cookies().toString(),
        },
        cache: "no-store" });
    return response.json();
}

export default async function Wishlist() {
    const wishlists = await getWishlist();
// console.log(wishlists, 'wishlists <<<<<<<<<<<<');;

    return (
        <>
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-l">

                            <th><b>Name</b></th>
                            <th><b>Deskription</b></th>
                            <th><b>Price</b></th>
                            <th><b>Action</b></th>
                            <th></th>
                        </tr>
                    </thead>
                    {wishlists?.data?.map((data: WishlistInterface) => (
                        <ListWishlist wishlist={data} />
                    ))}

                </table>
            </div>
        </>
    )
}