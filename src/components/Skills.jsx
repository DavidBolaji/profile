import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'


const Box = ({ct}) => {
  const ref = useRef();
  const gref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return

    // ref.current.rotation.x += 0.008
    ref.current.rotation.y += 0.005
  })

  const handeleRotation = (event) => {
    const positionX = (event.clientX / window.innerWidth) * 2 - 1
    const positionY = (event.clientY / window.innerHeight) * 2 - 1

    gref.current.rotation.y = positionX * 0.5
    gref.current.rotation.x = positionY * 0.5
  }
  // const terrainTexture = useTexture('https://media.istockphoto.com/id/169958602/photo/shiny-royal-blue-midsize-car-with-black-interior.jpg?s=612x612&w=0&k=20&c=LAxkdfKyy5syMsQ086FryQAZJx9nlqrACN1Y7qtUgxQ=');
  const terrainTexture = useTexture('https://res.cloudinary.com/dpi44zxlw/image/upload/v1671737394/PHP_4_-removebg-preview_nansxy.png');


  return (
    <group ref={gref}  onPointerMove={(event) => handeleRotation(event)}>
      <mesh ref={ref} >
        <sphereGeometry args={[2.8, 59, 40]} />
        {/* <boxGeometry args={[0, 3.9, 3.9]} /> */}
        {ct === 'light' && <meshStandardMaterial map={terrainTexture} color="#4dba87" opacity={1} transparent />}
        {ct === 'dark' && <meshStandardMaterial map={terrainTexture} color="#4dba87" opacity={1} transparent />} 
        {/* <meshStandardMaterial map={terrainTexture} color="#4dba87" opacity={1} transparent/> */}
      </mesh>
    </group>
  )
}

const skills = ({ct}) => {
  return (
    <Canvas>
      {/* <PerspectiveCamera makeDefault fov={75} position={[0,0,5]} /> */}
      <ambientLight intensity={4} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box ct={ct} />
      <OrbitControls />

      {/* <Box position={[-0.8, 0, 0]} /> */}
      {/* <Box position={[1.2, 0, 0]} /> */}
    </Canvas>
  )
}

export default skills;