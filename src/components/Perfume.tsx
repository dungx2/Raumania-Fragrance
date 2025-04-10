/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    bottom: THREE.Mesh
    bottom_1: THREE.Mesh
    bottom_2: THREE.Mesh
    bottom_3: THREE.Mesh
    Top: THREE.Mesh
  }
  materials: {}
}


type PerfumeProps = {

}

export function Perfume(props: PerfumeProps ) {
  const { nodes, materials } = useGLTF('/Perfume Zara.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Perfume" position={[0, -0.361, 0]} scale={[1, 1.453, 0.518]}>
          <mesh
            name="bottom"
            castShadow
            receiveShadow
            geometry={nodes.bottom.geometry}
            material={nodes.bottom.material}
          />
          <mesh
            name="bottom_1"
            castShadow
            receiveShadow
            geometry={nodes.bottom_1.geometry}
            material={nodes.bottom_1.material}
          />
          <mesh
            name="bottom_2"
            castShadow
            receiveShadow
            geometry={nodes.bottom_2.geometry}
            material={nodes.bottom_2.material}
          />
          <mesh
            name="bottom_3"
            castShadow
            receiveShadow
            geometry={nodes.bottom_3.geometry}
            material={nodes.bottom_3.material}
          />
        </group>
        <mesh
          name="Top"
          castShadow
          receiveShadow
          geometry={nodes.Top.geometry}
          material={nodes.Top.material}
          position={[0, 2.175, 0]}
          scale={0.28}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Perfume Zara.glb')
