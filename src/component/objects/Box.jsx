import React, { Suspense, useEffect, useRef, useState } from 'react'
import {useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Box = (props) => {

   
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        // mesh.current.rotation.x += 0.01,
            if(active) {
                mesh.current.rotation.z += .01
                mesh.current.rotation.x -= .01
                mesh.current.rotation.y += .01
                
                
            }else{
                mesh.current.rotation.z -= .01
                mesh.current.rotation.x += .01
                mesh.current.rotation.y -= .01

            }
        })
        
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) =>{ 
            setActive(!active)
            
        }}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial opacity={1} transparent color={hovered ? 'blue' : active?'orange':'red'} />
      </mesh>
    )
  }