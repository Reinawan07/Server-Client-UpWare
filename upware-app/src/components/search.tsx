import React, { useState, ChangeEvent, FormEvent } from 'react';

interface SearchProps {
    handleSearch: (query: string) => void;
}

export default function Search({ handleSearch }: SearchProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchQuery(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearch(searchQuery);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-full md:w-1/2">
                <form className="w-full" onSubmit={handleSubmit}>
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
                            value={searchQuery}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}