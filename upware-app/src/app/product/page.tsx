import CardProduct from "@/components/CardProduct";
import Search from "@/components/Search";
import { ProductsInterface } from "@/db/models/product";

async function getProducts(): Promise<ProductsInterface[]> {
    try {
        const response = await fetch("http://localhost:3000/api/products", { cache: "no-store" });
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export default async function Product() {
    const products = await getProducts();

    return (
        <div className="w-full min-h-screen flex flex-col gap-10 justify-start items-start px-5 md:px-20 pt-7 mb-10">
            <Search />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                {products.map((product) => (
                    <CardProduct product={product} />
                ))}
            </div>
        </div>
    )
}