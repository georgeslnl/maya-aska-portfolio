import React from 'react';
import Link from 'next/link';

const Header = () => {

    return (
        <header>
            <div className="flex justify-between items-center px-2 mt-5 mb-12 align-middle">
                <Link href="/" >
                    <h1 className={`cursor-pointer text-3xl lg:text-8xl p-0`}>
                        Maya-Aska
                    </h1>
                </Link>
                <div className="flex gap-8">
                    <Link href="/info" className="lg:text-xl md:text-lg text-base hover:scale-105 font-jacquarda text-gray-500">
                        Info
                    </Link>
                    <a href="https://www.instagram.com/mayaxaska/" className="lg:text-xl md:text-lg  text-base hover:scale-105 font-jacquarda text-gray-500">
                        Instagram
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;