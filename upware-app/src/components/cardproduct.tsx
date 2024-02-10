import Link from "next/link";
import ButtonWishlist from "./ButtonWishlist";
import { ProductsInterface } from "@/db/models/product";


function formatRupiah(number: number | undefined) {
    if(!number) return 0 
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
     
 }

export default function CardProduct({ product }: { product: ProductsInterface }) {
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
                        <span className="title-font font-semibold text-l">{formatRupiah(product.price)}</span>
                        <ButtonWishlist productId={product._id} />
                    </div>
                </div>
            </div>
        </>
    )
}
