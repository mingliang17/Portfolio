import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx'
import { assetPath } from '../utils/assetPath.js'; 

const About = () => {
    const [hasCopied,setHasCopied] = useState(false);
    const handleCopy = () => {        
        navigator.clipboard.writeText('mingliang_ng.nml@gmail.com');
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);//in milliseconds
    }

    return (
        <section className="c-space border-4 border-purple-400" id="about">
            <div className="grid
            xl:grid-cols-3
            xl:grid-rows-6
            md:grid-cols-2
            grid-cols-1
            gap-5
            h-full">
                
                <div className="col-span-1 xl:row-span-3 border-4 border-gray-400">
                    <div className="grid-container">
                        <img src={assetPath('assets/grid1.png')} alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Kaden</p>
                            <p className="grid-subtext">I am a passionate web developer with experience in building modern web applications.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3 border-4 border-green-400">
                    <div className="grid-container">
                        <img src={assetPath('assets/grid2.png')} alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">TechStack</p>
                            <p className="grid-subtext">I specialise in Js/Ts with focus on React and Next.js ecosystems.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3 border-4 border-gray-400">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center bg-transparent">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 22.3964, lng: 114.1095, color : 'white', size: 100, text: 'Hong Kong' }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">TechStack</p>
                            <p className="grid-subtext">I specialise in Js/Ts with focus on React and Next.js ecosystems.</p>
                            <Button name="Contact Me to Learn More" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="col-span-2 xl:row-span-3 border-4 border-green-400">
                    <div className="grid-container">
                        <img src={assetPath('assets/grid3.png')} alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">TechStack</p>
                            <p className="grid-subtext">I specialise in Js/Ts with focus on React and Next.js ecosystems.</p>
                        </div>
                    </div>
                </div>  

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src={assetPath('assets/grid4.png')} alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">Contact me</p>
                        </div>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? assetPath('assets/tick.svg') : assetPath('assets/copy.svg')} alt="copy" />
                            <p className="grid-subtext">mingliang_ng.nml@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
