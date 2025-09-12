import React from 'react';
import LazyLoad from 'react-lazyload';

const ProductCard = ({ product }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-amber-50 dark:bg-zinc-800 py-4 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700">
            <div className="relative overflow-hidden rounded-md">
                <LazyLoad height={200} offset={100} once placeholder={<div className="h-48 w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" /> }>
                    <img
                        src={product.image || (product.images && product.images[0])}
                        alt={product.title}
                        loading="eager"
                        className="mx-auto h-48 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                </LazyLoad>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="mt-3 px-3 space-y-2 ">
                <h3 className="line-clamp-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 transition-colors duration-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                    {product.title}
                </h3>
                <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 transition-all duration-200 group-hover:scale-105">
                        ${product.price}
                    </p>
                    <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                        <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


