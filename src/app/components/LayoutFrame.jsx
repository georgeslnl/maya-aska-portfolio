'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import SideNav from './Sidebar';

const LayoutFrame = ({ children, sidebarProjects = [] }) => {
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) {
    return children;
  }

  return (
    <div className="flex flex-col max-h-svh min-h-svh overflow-y-auto overflow-hidden px-4">
      <Header />
      <div className="flex flex-row flex-grow overflow-hidden">
        <SideNav cmsWorks={sidebarProjects} />
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

export default LayoutFrame;
