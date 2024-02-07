import ListWishlist from "@/components/ListWishlist";
import { WishlistModel } from "@/db/models/wishlist";


async function getWishlist(): Promise<WishlistModel[]> {
    const response = await fetch("http://localhost:3001/wishlist", { cache: "no-store" });
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