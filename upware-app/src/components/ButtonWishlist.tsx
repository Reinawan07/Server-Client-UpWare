import Link from "next/link";

export default function ButtonWishlist() {
    return (
        <>
            <div className="card-actions justify-end">

                <Link href="/wishlist" className="btn text-white btn-primary hover:bg-secondary">Add Wishlist</Link>

            </div>
        </>
    )
}