import React from 'react';
import Header from './Header';
import SideNav from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-svh p-2">
      <SideNav />
      <div className="w-4/5 p-8">
          {children}
      </div>
    </div>
  );
};

export default Layout;