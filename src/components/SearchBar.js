import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import useDebounce from '../hooks/useDebounce';

const SearchBar = ({ onSearch }) => {
    const { theme, toggleTheme } = useTheme();
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 400);

    React.useEffect(() => {
        onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    return (
        <div className={`w-full p-4 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-amber-300'}`}>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className={`w-full text-center text-2xl font-semibold sm:w-auto sm:text-left ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    Product Gallary
                </div>
                <div className="flex w-full items-center gap-3 sm:w-auto">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={query}
                        onChange={handleInputChange}
                        className={`w-full rounded-md border px-3 py-2 outline-none transition sm:w-96 ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400' : 'bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-500'}`}
                    />
                <button
                    type="button"
                    onClick={toggleTheme}
                    aria-pressed={theme === 'dark'}
                    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    className={`relative inline-flex h-8 w-16 items-center rounded-full transition ${theme === 'dark' ? 'bg-zinc-700' : 'bg-zinc-300'}`}
                >
                    <span className={`pointer-events-none absolute left-1 inline-flex h-5 w-5 items-center justify-center ${theme === 'dark' ? 'text-zinc-400' : 'text-amber-500'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
                            <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm10-9a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm14.95 7.778a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.415-1.415l.707.707a1 1 0 0 1 0 1.415ZM6.464 6.464A1 1 0 0 1 5.05 5.05l.707-.707A1 1 0 1 1 7.172 5.76l-.707.707Zm12.02-2.121a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.415-1.415l.707-.707a1 1 0 0 1 1.415 0ZM6.464 17.536a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.415-1.415l.707.707a1 1 0 0 1 0 1.415Z" clipRule="evenodd"/>
                        </svg>
                    </span>
                    <span className={`pointer-events-none absolute right-1 inline-flex h-5 w-5 items-center justify-center ${theme === 'dark' ? 'text-indigo-300' : 'text-zinc-400'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
                        </svg>
                    </span>
                    <span
                        className={`pointer-events-none absolute inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${theme === 'dark' ? 'translate-x-8' : 'translate-x-2'}`}
                    />
                </button>
                </div>

            </div>
        </div>
    );
};

export default SearchBar;