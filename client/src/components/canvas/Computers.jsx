import React from 'react';
import { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive object={computer.scene}/>
    </mesh>
  )
}


const ComputersCanvas =() => {
  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ positionin: [20, 3, 5], fov:25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      {/* LOADER WHILE THE MODEL IS LOADING */}
      <Suspense fallback={<CanvasLoader/>}>
      {/* ALLOW US TO MOVE THE MODEL LEFT/RIGHT */}
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <Computers/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default Computers