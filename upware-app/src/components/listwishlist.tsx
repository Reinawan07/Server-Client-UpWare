import { WishlistInterface } from "@/db/models/wishlist";

function formatRupiah(number: number | undefined) {
    if(!number) return 0 
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
     
 }

export default function ListWishlist({ wishlist }: { wishlist: WishlistInterface }) {


    return (
        <>
            <tbody>
                {/* row */}
                <tr>

                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img
                                        src={wishlist.product.thumbnail}
                                        alt={wishlist.product.name} />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{wishlist.product.name}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {wishlist.product.description}
                    </td>
                    <td>{formatRupiah(wishlist.product.price)}</td>
                    <th>
                        <button className="btn btn-ghost btn-xs bg-primary">Delete</button>
                    </th>
                </tr>
            </tbody>
        </>
    )
}