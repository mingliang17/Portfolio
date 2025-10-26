import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects } from "../constants/index.js";
import CanvasLoader from '../components/CanvasLoader.jsx';
import DemoComputer from '../components/DemoComputer.jsx';
import { assetPath } from '../utils/assetPath.js'; 

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <p className="text-2xl text-red-400">Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 border-4 border-green-400">

        {/* Spotlight Image */}
        <div className="absolute top-0 right-0 border-4 border-orange-400">
          <img src={assetPath(currentProject.spotlight)} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
        </div>

        {/* Project Info */}
        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
          <img src={assetPath(currentProject.logo)} alt="logo" className="w-10 h-10 shadow-sm object-contain" />
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo">
                  <img src={assetPath(tag.path)} alt={tag.name} className="w-6 h-6"/>
                </div>
              ))}
            </div>
            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
              <p>Check Live Site</p>
              <img src={assetPath('arrow-up.png')} alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          {/* Arrow Buttons */}
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={assetPath('left-arrow.png')} alt="left arrow" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src={assetPath('right-arrow.png')} alt="right arrow" />
            </button>
          </div>
        </div>

        {/* 3D Canvas */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">  
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
