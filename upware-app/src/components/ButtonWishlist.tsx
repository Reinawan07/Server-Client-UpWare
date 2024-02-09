'use client';
import { ObjectId } from 'mongodb';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

export default function ButtonWishlist({ productId }: { productId: ObjectId }) {
    const [isLoading, setLoading] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        const checkIfInWishlist = async () => {
            try {
                const response = await fetch('/api/wishlist');
                if (response.ok) {
                    const wishlistData = await response.json();
                    const isInWishlist = wishlistData.some((item: any) => item.productId === productId);
                    setIsInWishlist(isInWishlist);
                }
            } catch (error) {
                console.error('Error checking if product is in wishlist:', error);
            }
        };

        checkIfInWishlist();
    }, [productId]);

    const handleAddToWishlist = async () => {
        if (isInWishlist) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Product is already in wishlist!",
            });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`/api/wishlist/${productId}`, {
                method: 'POST',
            });
            if (response.ok) {
                Swal.fire({
                    title: "Success",
                    text: "Product added to wishlist!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Product is already in wishlist! || Please login to add wishlist",
                });
            }
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Failed to add product to wishlist!",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card-actions justify-end">
            {!isLoading && (
                <>
                    {isInWishlist ? (
                        <button className="btn text-white btn-disabled" disabled>
                            Already in Wishlist
                        </button>
                    ) : (
                        <button
                            className={`btn text-white btn-primary hover:bg-secondary`}
                            onClick={handleAddToWishlist}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Adding...' : 'Add Wishlist'}
                        </button>
                    )}
                </>
            )}
            {isLoading && <p>Loading...</p>}
        </div>
    );
}
