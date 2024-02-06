import CardProduct from "@/components/cardproduct";
import Search from "@/components/search";

export default function Product() {
    return (
        <div className="w-full min-h-screen flex flex-col gap-10 justify-start items-start px-5 md:px-20 pt-7">
            <Search />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    )
}