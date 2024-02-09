import CardProduct from "@/components/CardProduct";
import Search from "@/components/Search";
import { ProductsInterface } from "@/db/models/product";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'UpWare - Products',
  description: 'UpWare Products',
}
type MyResponse = {
    data: ProductsInterface[];
};

async function getProducts(): Promise<MyResponse> {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/products",{
        cache: "no-store",
    });
    return await data.json();
}
    

export default async function Product() {
    const {data} = await getProducts();
    

    return (
        <div className="w-full min-h-screen flex flex-col gap-10 justify-start items-start px-5 md:px-20 pt-7 mb-10">
            <Search />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                {data.map((product) => (
                    <CardProduct product={product} key={product.slug} />
                ))}
            </div>
        </div>
    )
}