'use client';
import React from 'react';
import Header from './Header';
import SideNav from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-svh overflow-hidden px-4">
      <Header />
      <div className="flex flex-row flex-grow overflow-hidden">
        <SideNav />
        <main
          className="flex-grow overflow-auto p-1 flex flex-wrap flex-row justify-center"
          tabIndex={1}
          role="region"
          aria-label="Main content"
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;