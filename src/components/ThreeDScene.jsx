import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text } from '@react-three/drei';

const ThreeDScene = () => {
  // Load the GLTF model from the public/models directory
  const { scene } = useGLTF('/models/scene.gltf'); // Adjusted path to public folder
  
  // Function to log the camera position (optional)
  const logCameraPosition = (camera) => {
    console.log('Camera Position:', camera.position);
  };

  return (
    <Canvas
      camera={{ position: [-9.662, 1.661, -1.543], fov: 50 }} // Initial camera position
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the scene
        logCameraPosition(camera); // Log the initial camera position
      }}
    >
      <OrbitControls
        enableZoom={true}
        enablePan={false} // Disable panning to fix the scene's position
        enableRotate={true}
        onChange={(e) => logCameraPosition(e.target.object)} // Log camera position on movement
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Render the 3D scene */}
      <primitive object={scene} />
      
      {/* Optional: Add text in 3D space */}
      <Text
  position={[0, 2, 2.5]} // Adjust these coordinates for text placement in 3D space
  fontSize={0.5}
  color="#FFFFFF" // White text
  anchorX="center" // Center text horizontally
  anchorY="middle" // Center text vertically
  rotation={[0, 4, 0]} // Rotate to face the camera (along Y axis by 180 degrees)
>
  AIFA Ventures
</Text>
    </Canvas>
  );
};

export default ThreeDScene;
