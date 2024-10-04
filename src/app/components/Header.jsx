import React from 'react';
import Link from 'next/link';


const Header = () => {


    return (
        <header>
            <div className="flex justify-between items-center px-2 mt-5 mb-12">
                <Link href="/">
                    <h1 className="text-3xl lg:text-8xl p-0">Maya-Aska</h1>
                </Link>
                <div className="flex gap-4">
                    <Link href="/info" className="lg:text-2xl text-base italic font-jacquarda text-stone-700 focus:text-red-700">
                        Info
                    </Link>
                    <a href="https://www.instagram.com/mayaxaska/" className="lg:text-2xl text-base italic font-jacquarda text-stone-700 focus:text-red-700">
                        Instagram
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;