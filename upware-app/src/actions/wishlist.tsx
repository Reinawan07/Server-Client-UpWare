'use server'
import { revalidatePath } from "next/cache";

export default async function deleteWishlist(id: number) {
    const response = await fetch(`http://localhost:3001/wishlist/${id}`, {
        method: "DELETE",
    })

    const result = await response.json()
    revalidatePath("/wishlist")
    console.log(result);
    
}