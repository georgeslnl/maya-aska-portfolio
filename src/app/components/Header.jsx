import React from 'react';
import Link from 'next/link';

const Header = () => {


    return (
        <header className="">
            <div className="flex justify-between items-center px-2">
                <Link href="/">
                    <h1 className="text-2xl  lg:text-7xl">Maya-Aska</h1>
                </Link>
                <div className="flex space-x-4">
                    <Link href="/info" className="text-base lg:text-2xl text-stone-700 focus:animate-ping">
                        INFO
                    </Link>
                    <a href="https://www.instagram.com/mayaxaska/" className="text-base lg:text-2xl text-stone-700 focus:animate-pulse">
                        INSTAGRAM
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;