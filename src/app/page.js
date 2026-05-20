// import React from "react";
import ImageGrid from "./components/ImageGrid";

import root1 from "./images/root/root-1.jpg"
import root2 from "./images/root/root-2.jpg"
import stillLife3 from "./images/still-life/still life 3 without border.jpg"
import atmos3 from "./images/atmos/atmos 3.jpg"
import atmos5 from "./images/atmos/atmos 5.jpg"
import sevenSisters3 from "./images/seven-sisters/seven sisters 3.jpg"
import pyae2 from "./images/la-pyae/la pyae 2.jpg"
import girls2 from "./images/girls/girls 2.jpg"
import girls3 from "./images/girls/girls 3.jpg"
import yuura1 from "./images/yuura/yuura 1.jpg"
import canterbury4 from "./images/canterbury/canterbury 4.jpg"


const imageData = [
  { src: atmos3, alt: "Home 6", span: 6 },
  { src: atmos5, alt: "Home 7", span: 6 },
  { src: sevenSisters3, alt: "Seven Sisters 3", span: 12 },
  { src: pyae2, alt: "La Pyae 2", span: 6 },
  { src: yuura1, alt: "Yuura 1", span: 6 },
  { src: girls2, alt: "Girls 2", span: 12 },
  { src: root2, alt: "Root 2", span: 6 },
  { src: root1, alt: "Root 1", span: 6 },
  { src: stillLife3, alt: "Still Life 3", span: 12 },
  { src: canterbury4, alt: "Canterbury 4", span: 12 },
];

export const metadata = {
  title: {
    absolute: "Maya-Aska",
  }
};

export default function Home() {
  return (
    <div className="w-11/12 lg:w-10/12 pb-10">
      <ImageGrid images={imageData} /> 
    </div>
  );
}
