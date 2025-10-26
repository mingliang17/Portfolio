// import * as THREE from 'three';
// import { Canvas, useFrame} from "@react-three/fiber";
// import { useRef } from "react";
// import { OrbitControls, Sparkles } from "@react-three/drei";

// const RotatingCube = () =>{
//   const meshRef = useRef();
//   useFrame(() =>{
//     if(meshRef.current){
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   })  
//   return(
//     <mesh ref={meshRef}>
//       <cylinderGeometry args={[1,1,1]}/>
//       <meshLambertMaterial color ="#468585" emissive ="#468585"/>
//       <Sparkles color = "orange" count = {100} scale={1} size={6} speed={0.002} noise={.2}/>  

//     </mesh>
//   )
// }
// const App = () =>{
//   return(
//     <Canvas 
//       style ={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}}
//       scene={{ background: new THREE.Color('#F0F0F0') }}
//       camera={{ position: [5, 5, 5], fov: 50 }}
//       >

//       <OrbitControls enableZoom = {true} enablePan= {true} enableRotate={true}/>
//       <directionalLight position = {[1,1,1]} intensity = {10} color = {0x9CDBA6}/>
//       <color attach = "background" args={[
//         '#F0F0F0'
//       ]}/>
//       <ambientLight intensity ={0.5}/>


//       <RotatingCube />
//     </Canvas>
//   )
// }

// export default App;

import Navbar from "./sections/navbar.jsx";
import Hero from"./sections/hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {
  return (
    <main className="w-full relative border-4 border-red-400">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;