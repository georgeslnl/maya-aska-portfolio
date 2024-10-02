import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <h1 className="text-2xl ">MAYA ASKA</h1>
            <div className="flex space-x-4">
                <h2 className="text-lg">INFO</h2>
                <h2 className="text-lg text-stone-700">INSTAGRAM</h2>
            </div>
        </header>
    );
};

export default Header;