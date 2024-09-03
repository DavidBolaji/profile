import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { Skeleton } from 'antd'

const Box = ({ ct }) => {
  const terrainTexture = useTexture('https://res.cloudinary.com/dpi44zxlw/image/upload/v1671737394/PHP_4_-removebg-preview_nansxy.png')

  return (
    <mesh>
      <sphereGeometry args={[2.8, 59, 40]} />
      {ct === 'light' && <meshStandardMaterial map={terrainTexture} color="#4dba87" opacity={1} transparent />}
      {ct === 'dark' && <meshStandardMaterial map={terrainTexture} color="#4dba87" opacity={1} transparent />}
    </mesh>
  )
}

const skills = ({ ct }) => {
  return (
    <div className='canvas-orbit'>
      <Canvas >
        <ambientLight intensity={4} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={Skeleton}>
          <Box ct={ct} />
        </Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          target={[0, 0, 0]}
           minDistance={1}
           maxDistance={5}
        />
      </Canvas>
    </div>
  )
}

export default skills
