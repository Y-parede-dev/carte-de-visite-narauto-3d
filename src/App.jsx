import logo from './logo.svg';
import './App.scss';
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {Box} from './component/objects/Box'

function App() {
  const [lightColor, setLightColor] = useState('rgba(230,230,230)');
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          carte de visite narauto v0.1.0
        </h1>
      </header>
      <Canvas>
        <ambientLight intensity={.9} color={lightColor}/>
        <pointLight position={[10,10,10]} />
        <Box setLightColor={setLightColor} position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <footer >©️ - Magin Code</footer>
    </div>
  );
}

export default App;
