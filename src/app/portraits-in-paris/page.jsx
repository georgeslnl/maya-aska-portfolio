import Credits from '../components/Credits';
import ImageGrid from '../components/ImageGrid';
import pip1 from '../images/portraits-in-paris/pip1.jpg';
import pip2 from '../images/portraits-in-paris/pip2.jpg';
import pip3 from '../images/portraits-in-paris/pip3.jpg';
import pip4 from '../images/portraits-in-paris/pip4.jpg';
import pip5 from '../images/portraits-in-paris/pip5.jpg';
import pip6 from '../images/portraits-in-paris/pip6.jpg';
// import pip7 from '../images/portraits-in-paris/pip7.jpg';
// import pip8 from '../images/portraits-in-paris/pip8.jpg';
// import pip9 from '../images/portraits-in-paris/pip9.jpg';
// import pip10 from '../images/portraits-in-paris/pip10.jpg';

export const metadata = {
    title: "Portraits in Paris"
};

const imageData = [
    { src: pip1, alt: "Portraits in Paris 1", span: 6 },
    { src: pip2, alt: "Portraits in Paris 2", span: 6 },
    { src: pip3, alt: "Portraits in Paris 3", span: 12},
    { src: pip4, alt: "Portraits in Paris 4", span: 12 },
    { src: pip5, alt: "Portraits in Paris 5", span: 6 },
    { src: pip6, alt: "Portraits in Paris 6", span: 6 },
    // { src: pip7, alt: "Portraits in Paris 7", span: 6 },
    // { src: pip8, alt: "Portraits in Paris 8", span: 6 },
    // { src: pip9, alt: "Portraits in Paris 9", span: 6 },
    // { src: pip10, alt: "Portraits in Paris 10", span: 6 },
];

const credits = [
    { role: "Photography & Styling", name: "Maya-Aska" },
    { role: "Makeup", name: "Paloma" },
    { role: "Model", name: "Emma" },
    { role: "Model", name: "Georgina" },
]

const PortraitsInParisPage = () => {
    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
            <h2 className='text-base lg:text-2xl mb-8'>Portraits in Paris</h2>
            <ImageGrid images={imageData.slice(0,2)} />
            <Credits credits={credits.slice(0,3)} />
            <ImageGrid images={imageData.slice(2, 3)} />
            <Credits credits={credits.slice(3)} />
            <ImageGrid images={imageData.slice(3)} />
        </div>
    );
};

export default PortraitsInParisPage