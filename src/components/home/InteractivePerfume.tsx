"use client"


import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { MeshStandardMaterial } from 'three'
import { div } from 'three/tsl'
import { Perfume } from '../Perfume'

type Props={}

export function InteractivePerfume({}: Props){
    return(
        <div className="absolute inset-0 z-10 flex times-center justify-center">
            <Canvas className='min-h-[60rem] w-full' camera={{position:[1.5, 1, 1.4], fov: 55}}>
                <Suspense>
                    <Scene/>
                </Suspense>
            </Canvas>
        </div>
    )
}



function Scene(){
    return(

        <group>
            <OrbitControls/>
            <Environment files={"/hdr/warehouse-256.hdr"}/>
            <Perfume/>
            <ContactShadows 
                position={[0, -0.8, 0]}
                opacity={0.75}
                scale={10}
                blur={2.5}
                far={4}
                resolution={256}
            /> 
        </group>
    )
}