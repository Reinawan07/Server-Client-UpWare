import ListWishlist from "@/components/listwishlist";
import Navbar from "@/components/navbar";

export default function Wishlist() {
    return (
        <>
            <Navbar />

            <div className="overflow-x-auto">
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