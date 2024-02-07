import Link from "next/link";
import ButtonWishlist from "./ButtonWishlist";
import { Products } from "@/db/models/product";

export default function CardProduct({ product }: { product: Products }) {
    const maxDescriptionLength = 100;

    const description = product.description.length > maxDescriptionLength
        ? product.description.substring(0, maxDescriptionLength).trim() + "..."
        : product.description;

    return (
        <>
            <div className="card bg-base-100 shadow-xl w-full md:w-80">
                <figure>
                    <Link href={`/product/${product.slug}`}>
                        <img
                            src={product.thumbnail}
                            alt={product.name} />
                    </Link>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="text-sm overflow-hidden h-16">{description}</p> 
                    <div className="flex justify-between items-center">
                        <span className="title-font font-semibold text-l">Rp. {product.price}</span>
                        <ButtonWishlist />
                    </div>
                </div>
            </div>
        </>
    )
}
