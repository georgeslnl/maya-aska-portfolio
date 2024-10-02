'use client';
import React, { useEffect, useState } from 'react';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to listen for scroll events
    useEffect(() => {
        const handleScroll = () => {
            // Update state based on scroll position
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="sticky top-0">
            <div className="flex justify-between items-center p-1">
                <h1 className={`transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-7xl'}`}>Maya-Aska</h1>
                <div className="flex space-x-4">
                    <h2 className="text-lg">INFO</h2>
                    <h2 className="text-lg text-stone-700">INSTAGRAM</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;