import React from 'react';
import Header from './Header';
import SideNav from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <Header/>
      <div className="flex flex-row max-h-full flex-grow mt-4 lg:mt-12">
        <SideNav/>
        <div className="flex-grow overflow-scroll p-1 flex flex-wrap flex-row justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;