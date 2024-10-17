import React from 'react';
import Image from 'next/image';
import FadeUp from '../components/FadeUp';
import onna1 from '../images/onna/onna-1.jpg';
import onna2 from '../images/onna/onna-2.jpg';
import onna3 from '../images/onna/onna-3.jpg';
import onna4 from '../images/onna/onna-4.jpg';
import onna5 from '../images/onna/onna-5.jpg';
import onna6 from '../images/onna/onna-6.jpg';
import onna7 from '../images/onna/onna-7.jpg';
import onna8 from '../images/onna/onna-8.jpg';
import onna9 from '../images/onna/onna-9.jpg';
import onna10 from '../images/onna/onna-10.jpg';
import onna11 from '../images/onna/onna-11.jpg';

export const metadata = {
    title: "Onna"
};

const OnnaPage = () => {
    return (
        <div className="w-11/12 lg:w-10/12 pb-10">
        <FadeUp>
            <h2 className='text-base lg:text-2xl mb-8'>Onna</h2>
        </FadeUp>
        <div className="grid grid-cols-12 gap-1">
            <FadeUp className="col-span-6">
                <Image
                    key={1}
                    src={onna1}
                    alt="Onna 1"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className="col-span-6">
                <Image
                    key={2}
                    src={onna2}
                    alt="Onna 2"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className='col-span-12 p-2'>
                <p className='text-xs lg:text-base'>
                    Photography & Creative Direction - Maya-Aska
                </p>
            </FadeUp>
            <FadeUp className='col-span-12 p-2'>
                <p className='text-base lg:text-xl'>
                    This work was conceived from my own experience as a Japanese woman.<br /><br />

                    The images attempts to deconstruct and eventually question the Japanese ideal female figure, which was born from Japan&apos;s own socio-cultural background. <br /><br />

                    In Japan, the ideal Japanese woman is considered to be ladylike, kind, domestic, cute and obedient. She has fair skin, big eyes, a small face and she is young and thin. I began questioning these gender biased standards and began exploring the theme of the ideal woman and distorting her image. <br /><br />

                    From my experience living in the Europe for a long time, Western societies such as the UK and France boast a cosmopolitan society which makes them more likely to be open to diversity. This means diverse perspectives on standards of beauty and the definition of the ideal woman. Of course, most beauty standards are constructed from Caucasian men&apos;s fantasies, giving women and people of colour little room to define their own ideals. However, in comparison to Japan, there is a bit more open mindedness. It is unimaginable in London to praise someone for the paleness of their skin due to racist undertones. However, that happens on an everyday basis in Japan: I have been told that a couple of times back in Tokyo. We can also note that women in Western countries express their beliefs more outspokenly, having more women in leadership roles in comparison to Japan. <br /><br /> 

                    The work portrays the constrictive nature of the societal standards imposed upon Japanese women. <br /><br />

                    And the dilemma women face: to conform to those social standards or let one&apos;s identity and self expression loose. <br /><br />
                </p>
            </FadeUp>
            {/* Chapter 1 - Eyes */}
            <FadeUp className='col-span-12 p-2'>
                <p className='text-lg lg:text-2xl'>
                <br/>Chapter 1 - Eyes
                </p>
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image 
                    key={3}
                    src={onna3}
                    alt="Onna 3"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className='col-span-12 p-2'>
                <p className='text-base lg:text-xl'>
                Double eyelid points to the crease on the upper lid. Cosmetic products meant to create this line (example: double eyelid tape or double eyelid glue) decorate the beauty stores in Japan, whilst train carriages will advertise cosmetic surgery for double eyelids.<br /><br />

                Japanese people crave this crease on their eyelids. However, the products and services mentioned previously are mainly targeted towards women. Double eyelids are such a prevalent beauty standard that it is hard to see female celebrities with the opposite feature: monolids. I felt uncomfortable with this standard of beauty that holds double eyelids as supreme and looks down on monolids. I wanted to communicate my discomfort through the photos.
                </p>
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image 
                    key={4}
                    src={onna4}
                    alt="Onna 4"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <br />
            {/* Chapter 2 - Self */}
            <FadeUp className='col-span-12 p-2'>
                <p className='text-lg lg:text-2xl'>
                <br/>Chapter 2 - Self
                </p>
            </FadeUp>
            <FadeUp className="col-span-9 col-start-3">
                <Image
                    key={5}
                    src={onna1}
                    alt="Onna 5"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className='col-span-12 p-2'>
                <p className='text-base lg:text-xl'>
                As the proverb &quot;the nail that sticks out gets hammered down&quot; suggests, Japanese society has a tendency to suppress individuals who deviate from the social code. This seems to be even more pronouned for women. Combined with their low social and economic status, many Japanese women may feel powerless against social criticism and condemnation. I named this chapter &quot;self&quot; with the hope that more Japanese women will be able to assert themselves without fear of social criticism and enjoy their freedom of expression.
                </p>
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image
                    key={6}
                    src={onna5}
                    alt="Onna 6"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image
                    key={7}
                    src={onna6}
                    alt="Onna 7"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>

            {/* Chapter 3 - Skin */}
            <FadeUp className='col-span-12 p-2'>
                <p className='text-lg lg:text-2xl'>
                <br/>Chapter 3 - Skin
                </p>
            </FadeUp>
            <FadeUp className="col-span-6">
                <Image
                    key={8}
                    src={onna7}
                    alt="Onna 8"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className="col-span-6">
                <Image
                    key={9}
                    src={onna8}
                    alt="Onna 9"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className='col-span-12 p-2'>
                <p className='text-base lg:text-xl'>
                In Japan, a fair complexion used to signify noble status.<br /><br />

                This preference towards fair complexion still remains today. Although tan skin was popular during the Heisei era (1989 to 2019), pale skin is trending again in the current Reiwa era. Perhaps people with dark skin tones feel uncomfortable because of the amount of praise given to fair skin. In the current social landscape, where individuals blend culturally and have a deeper understanding on mutlinationality, isn&apos;t it time to make fair skin glorification a memory of the past? <br /><br />
                </p>
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image
                    key={10}
                    src={onna9}
                    alt="Onna 10"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>

            {/* Chapter 4 - House */}
            <FadeUp className='col-span-12 p-2'>
                <p className='text-lg lg:text-2xl'>
                    <br/>Chapter 4 - House
                </p>
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image 
                    key={11}
                    src={onna10}
                    alt="Onna 11"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className='col-span-12 p-2'>
                <p className='text-base lg:text-xl'>
                Since ancient times, the tie between a woman and her family has been unbreakable across varying cultures. However, as more women enter the work force, these traditional values have also been questioned. The issue with Japan is, despite the increase in the number of working women, the traditional idea of the housewife remains mainstream. It places a heavy burden on women who work: balancing career and home and women who do not work: high expectations for house maintenance and child care. Many Japanese women feel compelled to give up their jobs and return home as full-time housewives due to social barriers that discriminate against them. Examples include difficulty  returning to work after giving birth, and the difficulty of getting promoted in a male-dominated workplace environment . I wanted to create something that questions such customs.
                </p>
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image
                    key={12}
                    src={onna2}
                    alt="Onna 12"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
            <FadeUp className="col-span-12">
                <Image
                    key={13}
                    src={onna11}
                    alt="Onna 13"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </FadeUp>
        </div>
        </div>
    );
}

export default OnnaPage;