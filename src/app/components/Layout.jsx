import LayoutFrame from './LayoutFrame';
import { getSanityProjectsForNavigation } from '@/sanity/lib/queries';

const Layout = async ({ children }) => {
  const sidebarProjects = await getSanityProjectsForNavigation();

  return <LayoutFrame sidebarProjects={sidebarProjects}>{children}</LayoutFrame>;
};

export default Layout;
