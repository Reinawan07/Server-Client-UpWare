import CardProduct from "@/components/cardproduct";
import Navbar from "@/components/navbar";

export default function Product() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen flex flex-col gap-10 justify-start items-start px-20 pt-7">
                <div className="w-full flex justify-center">
                    <div className="w-1/2">
                        <form className="w-full">
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 ps-14 text-lg border rounded-xl border-gray-600 placeholder-gray-400 focus:ring-slate-100 focus:border-slate-100"
                                    placeholder="Search products..."
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
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
        </>
    )
}