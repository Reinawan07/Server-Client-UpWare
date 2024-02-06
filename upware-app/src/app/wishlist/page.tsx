import ListWishlist from "@/components/ListWishlist";

export default function Wishlist() {
    return (
        <>
            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Deskription</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <ListWishlist/>

                </table>
            </div>
        </>
    )
}