import React from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';

const Home = () => {
    const [query, setQuery] = React.useState('');
    return (
        <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
            <SearchBar onSearch={setQuery} />
                
            </header>
            <main className="mx-auto max-w-6xl">
                <ProductList query={query} />
            </main>
        </div>
    );
};

export default Home;


