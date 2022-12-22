import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  const gref = useRef()
  const image = useTexture({
    metalnessMap:
      'https://media.istockphoto.com/id/169958602/photo/shiny-royal-blue-midsize-car-with-black-interior.jpg?s=612x612&w=0&k=20&c=LAxkdfKyy5syMsQ086FryQAZJx9nlqrACN1Y7qtUgxQ=',
    map:
      'https://media.istockphoto.com/id/169958602/photo/shiny-royal-blue-midsize-car-with-black-interior.jpg?s=612x612&w=0&k=20&c=LAxkdfKyy5syMsQ086FryQAZJx9nlqrACN1Y7qtUgxQ='
  })
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!ref.current) return

    ref.current.rotation.x += 0.008
    ref.current.rotation.y += 0.008
  })

  const handeleRotation = (event) => {
    const positionX = (event.clientX / window.innerWidth) * 2 - 1
    const positionY = (event.clientY / window.innerHeight) * 2 - 1

    gref.current.rotation.y = positionX * 0.5
    gref.current.rotation.x = positionY * 0.5
  }
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <group ref={gref} onPointerMove={(event) => handeleRotation(event)}>
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <sphereGeometry args={[2, 59, 100]} />
        <meshStandardMaterial {...image} color={hovered ? 'hotpink' : '#fff'} />
        {/* <RenderTexture attach='map' /> */}
      </mesh>
    </group>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-0.8, 0, 0]} />
      {/* <Box position={[1.2, 0, 0]} /> */}
      <OrbitControls />
    </Canvas>
  )
}
