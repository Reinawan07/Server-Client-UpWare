'use client'
import React, { useState, useEffect } from 'react';
import CardProduct from "@/components/CardProduct";
import Search from "@/components/Search";
import { ProductsInterface } from "@/db/models/product";
import { useDebounce } from '@uidotdev/usehooks';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Product() {
    const [data, setData] = useState<ProductsInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const debouncedSearchQuery = useDebounce(searchQuery, 300);
    const [filteredData, setFilteredData] = useState<ProductsInterface[]>([]);

    useEffect(() => {
        setPage(1);
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedSearchQuery) {
            fetchData();
        } else {
            fetchData();
        }
    }, [debouncedSearchQuery, page]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?search=${debouncedSearchQuery}&page=${page}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const newData: { data: ProductsInterface[] } = await response.json();
            const updatedData = page > 1 ? [...data, ...newData.data] : newData.data;
            setData(updatedData);
            setFilteredData(updatedData);
            setError(null);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query.toLowerCase());
    };

    const fetchMoreData = () => {
        setPage(page + 1);
    };

    return (
        <div className="w-full min-h-screen flex flex-col gap-10 justify-start items-start px-5 md:px-20 pt-7 mb-10">
            <Search handleSearch={handleSearch} />
            <InfiniteScroll
                dataLength={filteredData.length}
                next={fetchMoreData}
                hasMore={!loading && !error}
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more products</p>}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
                    {error ? (
                        <p>{error}</p>
                    ) : filteredData.map((product, index) => (
                        <CardProduct product={product} key={index} />
                    ))}
                </div>
                {loading && (
                    <div className='flex items-center justify-center w-full'>
                        <div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"></div>
                        <p className="ml-2">Loading...</p>
                    </div>
                )}
            </InfiniteScroll>
        </div>
    );
}
