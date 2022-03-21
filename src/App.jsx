import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {Box} from './component/objects/Box'
import {Model} from './component/objects/model3D/Model'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function App() {
  const [lightColor, setLightColor] = useState('rgba(230,230,230)');

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 4;
      controls.maxDistance = 6;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          carte de visite narauto v0.1.0
        </h1>
      </header>
      <Canvas>
        <CameraController />
        <ambientLight intensity={.9} color={lightColor}/>
        <pointLight position={[10,10,10]} />
        <Model scale={.5}/>
      </Canvas>
      <footer >©️ - 2022 Magin Code</footer>
    </div>
  );
}

export default App;
