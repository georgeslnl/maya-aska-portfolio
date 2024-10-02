import React from 'react';
import Header from './Header';
import SideNav from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <Header />
      <div className="flex flex-row max-h-full flex-grow mt-4 lg:mt-12">
        <SideNav />
        <main
          className="flex-grow overflow-scroll p-1 flex flex-wrap flex-row justify-center"
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