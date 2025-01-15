import React from "react";
import ImageGrid from "./components/ImageGrid";
import home1 from "./images/home/home-1.jpg";
import home2 from "./images/home/home-2.jpg";
import home3 from "./images/home/home-3.jpg";
import home4 from "./images/home/home-4.jpg";
import home5 from "./images/home/home-5.jpg";
import home6 from "./images/home/home-6.jpg";
import home7 from "./images/home/home-7.jpg";
import home8 from "./images/home/home-8.jpg";
import home9 from "./images/home/home-9.jpg";
import home10 from "./images/home/home-10.jpg";
import home11 from "./images/home/home-11.jpg";
import home12 from "./images/home/home-12.jpg";

const imageData = [
  { src: home6, alt: "Home 6", span: 6 },
  { src: home7, alt: "Home 7", span: 6 },
  { src: home3, alt: "Home 3", span: 12 },
  { src: home8, alt: "Home 3", span: 6 },
  { src: home9, alt: "Home 3", span: 6 },
  { src: home4, alt: "Home 4", span: 6 },
  { src: home5, alt: "Home 5", span: 6 },
  { src: home10, alt: "Home 10", span: 12 },
  { src: home1, alt: "Home 1", span: 6 },
  { src: home2, alt: "Home 2", span: 6 },
  { src: home11, alt: "Home 11", span: 6 },
  { src: home12, alt: "Home 12", span: 6 },
];

export const metadata = {
  title: {
    absolute: "Maya-Aska",
  }
};

export default function Home() {
  return (
    <div className="w-11/12 lg:w-10/12 pb-10"> 
    <div className="mb-5 lg:mb-20">
    <ImageGrid images={imageData.slice(0,2)} />
    </div>
    <div className="mb-5 lg:mb-20">
    <ImageGrid images={imageData.slice(2, 3)} />
    </div>
    <div className="mb-5 lg:mb-20">
    <ImageGrid images={imageData.slice(3, 5)} />
    </div>
    <div className="mb-5 lg:mb-20">
    <ImageGrid images={imageData.slice(5, 7)} />
    </div>
    <div className="mb-5 lg:mb-20">
    <ImageGrid images={imageData.slice(7, 8)} />
    </div>
    <div>
    <ImageGrid images={imageData.slice(8)} />
    </div>
    </div>
  );
}
