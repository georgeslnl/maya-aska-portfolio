import React from 'react';
import FadeUp from './FadeUp';

const Footer = () => {
    return (
        <FadeUp >
            <footer className="container group flex justify-end items-center w-11/12 lg:w-10/12 py-4">
                <a
                    href="https://georgeslnl.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:scale-105"
                >
                    website by <span className='font-bold'>Georges</span>
                </a>
            </footer>
        </FadeUp>
    );
};

export default Footer;