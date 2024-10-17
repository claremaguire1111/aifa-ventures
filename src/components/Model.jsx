const Model = () => {
    const { scene } = useGLTF('/scene.gltf');
  
    return (
      <Canvas
        camera={{ position: [2, 2, 2], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ camera }) => {
          console.log(camera.position); // Logs camera position
        }}
      >
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          onChange={(e) => console.log(e.target.object.position)} // Logs camera position on change
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <primitive object={scene} />
      </Canvas>
    );
  };
  

