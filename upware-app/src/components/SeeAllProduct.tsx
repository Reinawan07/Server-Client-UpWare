import Link from "next/link";

export default function SeeAllProduct() {
    return (
        <>
            <div className="flex justify-center mb-10 mt-10">
                <Link href="/product" className="btn btn-outline btn-primary">See All Products</Link>
            </div>
        </>
    )
}
