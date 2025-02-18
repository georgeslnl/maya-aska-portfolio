import React from 'react';
import Link from 'next/link';

const Header = () => {

    return (
        <header>
            <div className="flex justify-between items-center px-2 mt-5 mb-12">
                <Link href="/" >
                    <h1 className={`cursor-pointer text-3xl lg:text-8xl p-0`}>
                        Maya-Aska
                    </h1>
                </Link>
                <div className="flex gap-8 items-center">
                    <Link href="https://open.spotify.com/playlist/007NviI7Wo8PX1xxWVVIsZ?si=JDWeo750TGiFIbIaJCtApg&pi=3fzmY6DZR-Wt8" target="_blank" className='lg:text-2xl md:text-lg text-base font-jacquarda italic text-stone-700 opacity-0 hover:opacity-5'>
                        Secret Link
                    </Link>
                    <Link href="/info" className="lg:text-2xl md:text-lg text-base italic hover:scale-105 font-jacquarda text-stone-700">
                        Info
                    </Link>
                    <Link href="https://www.instagram.com/mayaxaska/" target="_blank" className="lg:text-2xl md:text-lg  text-base italic hover:scale-105 font-jacquarda text-stone-700">
                        Instagram
                    </Link>

                </div>
            </div>
        </header>
    );
};

export default Header;