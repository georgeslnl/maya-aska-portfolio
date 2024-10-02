import React from 'react';

const Header = () => {


    return (
        <header className="">
            <div className="flex justify-between items-center px-2">
                <h1 className="text-2xl  lg:text-7xl">Maya-Aska</h1>
                <div className="flex space-x-4">
                    <h2 className="text-base lg:text-2xl text-stone-700">INFO</h2>
                    <h2 className="text-base lg:text-2xl text-stone-700">INSTAGRAM</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;