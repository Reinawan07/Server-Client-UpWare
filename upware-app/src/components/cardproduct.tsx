import Wishlist from "./wishlist";

export default function CardProduct() {
    return (
        <div className="card bg-base-100 shadow-xl w-full md:w-80">
            <figure>
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="flex justify-between items-center">
                    <span className="title-font font-medium text-2xl">$58.00</span>
                    <Wishlist />
                </div>
            </div>
        </div>
    )
}