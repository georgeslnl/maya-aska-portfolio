import onna2 from '../images/onna/onna-2.jpg';
import onna4 from '../images/onna/onna-4.jpg';
import card6 from '../images/card/card-6.jpg';
import card4 from '../images/card/card-4.jpg';
import card1 from '../images/card/card-1.jpg';
import gentlewoman3 from '../images/gentlewoman/gentlewoman-3.jpg';
import gentlewoman4 from '../images/gentlewoman/gentlewoman-4.jpg';
import np1 from '../images/noiseless-portraits/np-1.jpg';
import np6 from '../images/noiseless-portraits/np-6.jpg';
import r1 from '../images/root/root-2.jpg';
import r2 from '../images/root/root-1.jpg';
import stillLife1 from '../images/still-life/still life 1.jpg';
import stillLife2 from '../images/still-life/still life 2.jpg';

export const worksData = {
  '2024': [
    { title: 'Roots', image: r1, alt: 'Root 1', href: '/roots', className: 'sm:col-span-3 sm:col-end-10' },
    { title: 'Roots', image: r2, alt: 'Root 2', href: '/roots', className: 'sm:col-span-3 sm:col-end-13' },
    { title: 'Still Life', image: stillLife1, alt: 'Still Life 1', href: '/still-life', className: 'sm:col-span-4 sm:col-end-9 sm:row-start-2' },
    { title: 'Still Life', image: stillLife2, alt: 'Still Life 2', href: '/still-life', className: 'sm:col-span-4 sm:col-end-13 sm:row-start-2' },
    { title: 'Onna', image: onna2, alt: 'Onna 7', href: '/onna', className: 'sm:col-span-3 sm:col-end-10' },
    { title: 'Onna', image: onna4, alt: 'Onna 10', href: '/onna', className: 'sm:col-span-3 sm:col-end-13' },
    { title: 'Card', image: card6, alt: 'Card 6', href: '/card', className: 'sm:col-span-3 sm:col-end-7' },
    { title: 'Card', image: card4, alt: 'Card 4', href: '/card', className: 'sm:col-span-3 sm:col-end-10' },
    { title: 'Card', image: card1, alt: 'Card 1', href: '/card', className: 'sm:col-span-3 sm:col-end-13' },
  ],
  '2023': [
    { title: 'Gentlewoman', image: gentlewoman3, alt: 'Gentlewoman 3', href: '/gentlewoman', className: 'sm:col-span-3 sm:col-end-10' },
    { title: 'Gentlewoman', image: gentlewoman4, alt: 'Gentlewoman 4', href: '/gentlewoman', className: 'sm:col-span-3 sm:col-end-13' },
    { title: 'Noiseless Portraits', image: np1, alt: 'Noiseless Portraits 1', href: '/noiseless-portraits', className: 'sm:col-span-4 sm:col-end-9' },
    { title: 'Noiseless Portraits', image: np6, alt: 'Noiseless Portraits 6', href: '/noiseless-portraits', className: 'sm:col-span-4 sm:col-end-13' },
  ],
};