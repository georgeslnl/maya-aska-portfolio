import React from 'react';
import Header from './Header';
import SideNav from './Sidebar';
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-svh overflow-hidden px-4">
      <Header />
      <div className="flex flex-row flex-grow overflow-hidden">
        <SideNav />
        <div
          className="overflow-auto p-1 flex flex-wrap"
          tabIndex={1}
          role="region"
          aria-label="Main content"
        >
          <main className="flex justify-center flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;