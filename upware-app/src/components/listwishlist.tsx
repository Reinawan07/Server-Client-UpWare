'use client'
import { useState } from 'react';
import { WishlistInterface } from "@/db/models/wishlist";
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic'

function formatRupiah(number: number | undefined) {
    if (!number) return 0;
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
}

const ListWishlist = ({ wishlist }: { wishlist: WishlistInterface }) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleDeleteWishlist = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist/${wishlist.productId}`, {
                method: "DELETE",
            });
            if (response.ok) {
                Swal.fire({
                    title: "Success",
                    text: "Wishlist deleted successfully",
                    icon: "success"
                });
            } else {
                console.error('Failed to delete wishlist');
            }
            router.refresh();
        } catch (error) {
            console.error('Error deleting wishlist:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
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
                    <button className="btn btn-ghost btn-xs bg-primary" onClick={handleDeleteWishlist} disabled={isLoading}>
                        {isLoading ? 'Deleting...' : 'Delete'}
                    </button>
                </th>
            </tr>
        </tbody>
    );
};

export default ListWishlist;
