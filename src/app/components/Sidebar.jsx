'use client';
import Link from 'next/link';
import useSound from 'use-sound';
import { usePathname } from 'next/navigation';


const SideNav = ({ cmsWorks = [] }) => {
  const pathname = usePathname();
  const works = [
    ...cmsWorks.map((work) => ({ name: work.title, link: work.href })),
  ];
  const showWorksList = pathname === '/works' || works.some((work) => work.link === pathname);

  const [play] = useSound('/sounds/page_turn.mp3');

  return (
    <div className="flex flex-col justify-between min-w-fit px-2 py-1">
      <nav
        className="font-cormorant"
        role="navigation"
        aria-label="Works navigation"
      >
        <Link
          href="/works"
          className="lg:text-3xl md:text-2xl text-xl focus:outline-none"
          aria-haspopup="true"
          aria-expanded={showWorksList}
        >
          Works
        </Link>
        {showWorksList && (
          <ul
            className="transition-opacity duration-300 mt-3"
            role="menu"
            aria-label="Photography works"
          >
            {works.map((work, index) => (
              <li
                key={index}
                className="text-xs md:text-base lg:text-sm hover:scale-105 text-gray-500"
                role="none"
              >
                <Link
                  href={work.link}
                  onClick={play}
                  className="focus:outline-none"
                  role="menuitem"
                  aria-label={`View ${work.name} photography series`}
                >
                  {work.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <a
        href="https://georgeslnl.github.io/"
        target="_blank"
        className="text-[8px] lg:text-xs hover:scale-105 pb-0 absolute bottom-3"
      >
        website by <span className="font-bold">Georges Linel</span>
      </a>
    </div>
  );
};

export default SideNav;
