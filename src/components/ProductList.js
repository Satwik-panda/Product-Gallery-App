import React from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const LIMIT = 18;

const ProductList = ({ query }) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [skip, setSkip] = React.useState(0);
    const [total, setTotal] = React.useState(null);
    const [retryKey, setRetryKey] = React.useState(0);

    const loaderRef = React.useRef(null);
    const abortRef = React.useRef(null);
    const requestIdRef = React.useRef(0);

    const hasMore = total == null || products.length < total;

    const fetchPage = React.useCallback(async (overrideSkip) => {
        if (loading) return;
        const currentSkip = typeof overrideSkip === 'number' ? overrideSkip : skip;
        setLoading(true);
        setError(null);

        if (abortRef.current) {
            abortRef.current.abort();
        }
        const controller = new AbortController();
        abortRef.current = controller;
        const reqId = ++requestIdRef.current;

        try {
            const baseUrl = query ? `https://dummyjson.com/products/search` : 'https://dummyjson.com/products';
            const res = await axios.get(baseUrl, {
                signal: controller.signal,
                params: {
                    limit: LIMIT,
                    skip: currentSkip,
                    ...(query ? { q: query } : {})
                }
            });
            if (reqId !== requestIdRef.current) return;
            const data = res.data || {};
            const pageProducts = data.products || [];
            setProducts((prev) => prev.concat(pageProducts));
            setTotal((prev) => (typeof data.total === 'number' ? data.total : prev));
            setSkip(currentSkip + LIMIT);
        } catch (err) {
            if (axios.isCancel?.(err) || err?.name === 'CanceledError' || err?.name === 'AbortError') {
                // request was aborted; ignore
            } else {
                setError('Failed to load products.');
            }
        } finally {
            if (reqId === requestIdRef.current) {
                setLoading(false);
            }
        }
    }, [query, skip, loading]);

    React.useEffect(() => {
        setProducts([]);
        setSkip(0);
        setTotal(null);
        fetchPage(0);
    }, [query, retryKey]);


    React.useEffect(() => {
        if (!loaderRef.current) return;
        if (products.length === 0) return; 
        const sentinel = loaderRef.current;

        const io = new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting && hasMore && !loading) {
                fetchPage();
            }
        }, { rootMargin: '200px' });

        io.observe(sentinel);
        return () => {
            io.unobserve(sentinel);
            io.disconnect();
        };
    }, [fetchPage, hasMore, loading, products.length]);

    const retry = () => setRetryKey((k) => k + 1);

    if (error) {
        return (
            <div className="flex flex-col items-center gap-3 p-6 text-center">
                <p className="text-red-600 dark:text-red-400">{error}</p>
                <button onClick={retry} className="rounded-md bg-zinc-900 px-4 py-2 text-white dark:bg-white dark:text-zinc-900">Retry</button>
            </div>
        );
    }

    return (
        <div className="w-full">
            {loading && products.length === 0 ? (
                <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: LIMIT }).map((_, i) => (
                        <div key={i} className="h-64 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            )}
            <div ref={loaderRef} className="h-10" />
            {loading && products.length > 0 && (
                <div className="p-4 text-center text-sm text-zinc-500">Loading more…</div>
            )}
            {!loading && !hasMore && products.length > 0 && (
                <div className="p-4 text-center text-xs text-zinc-400">You've reached the end.</div>
            )}
            {!loading && products.length === 0 && (
                <div className="p-6 text-center text-zinc-500">No products found.</div>
            )}
        </div>
    );
};

export default ProductList;


