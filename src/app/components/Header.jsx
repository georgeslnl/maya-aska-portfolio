'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1000); // Animation duration
    };

    return (
        <header>
            <div className="flex justify-between items-center px-2 mt-5 mb-12">
                <Link href="/" onClick={handleClick}>
                {/* TODO: Add typewriter animation? */}
                    <h1 className={`text-3xl lg:text-8xl p-0 ${isAnimating ? 'animate-pulse animate-fast' : ''}`}>
                        Maya-Aska
                    </h1>
                </Link>
                <div className="flex gap-8">
                    <Link href="/info" className="lg:text-2xl text-base italic hover:scale-110 font-jacquarda text-stone-700 focus:text-red-700">
                        Info
                    </Link>
                    <a href="https://www.instagram.com/mayaxaska/" className="lg:text-2xl text-base italic hover:scale-110 font-jacquarda text-stone-700 focus:text-red-700">
                        Instagram
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;