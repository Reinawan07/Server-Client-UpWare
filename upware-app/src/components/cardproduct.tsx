import Link from "next/link";
import ButtonWishlist from "./ButtonWishlist";
import { Products } from "@/db/models/product";


export default function CardProduct({ product }: { product: Products }) {
    return (
        <>
            <Link href={`/product/${product.slug}`} className="card bg-base-100 shadow-xl w-full md:w-80">
                <figure>
                    <img
                        src={product.thumbnail}
                        alt={product.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.excerpt}</p>
                    <div className="flex justify-between items-center">
                        <span className="title-font font-semibold text-l">Rp. {product.price}</span>
                        <ButtonWishlist />
                    </div>
                </div>
            </Link>
        </>
    )
}