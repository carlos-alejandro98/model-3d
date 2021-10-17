import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Computer(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/computer.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-18.51, 1.96, 22.84]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Cube000_Misc_0.geometry} material={materials.Misc} />
          </group>
          <group position={[63.05, 40.59, -54.69]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Cube004_Tower_0.geometry} material={materials.Tower} />
          </group>
          <group position={[-43.62, 40.2, -52.69]} rotation={[-Math.PI / 2, 0, -1.39]} scale={[0.35, 0.35, 0.35]}>
            <mesh geometry={nodes.Cube003_Monitor_0.geometry} material={materials.Monitor} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/computer.gltf')
