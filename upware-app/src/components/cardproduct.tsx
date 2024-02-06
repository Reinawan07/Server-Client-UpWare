export default function CardProduct() {
    return (
        <>
            <div className="card bg-base-100 shadow-xl md:w-80">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}