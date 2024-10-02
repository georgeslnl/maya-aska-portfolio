import React from 'react';
import Header from './Header';
import SideNav from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <Header/>
      {/* Main content */}
      <div className="flex flex-row flex-grow">
        {/* Sidebar (Navbar) */}
        <SideNav/>
        {/* Content */}
        <div className="w-4/5 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;