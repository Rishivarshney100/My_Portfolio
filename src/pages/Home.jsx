import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [islandRotation, setIslandRotation] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Map rotation to stage (1-4)
  useEffect(() => {
    // Normalize rotation to [0, 2PI)
    let rot = islandRotation % (2 * Math.PI);
    if (rot < 0) rot += 2 * Math.PI;
    // Each stage covers 90 degrees (PI/2 radians)
    // 0: [0, π/2), 1: [π/2, π), 2: [π, 3π/2), 3: [3π/2, 2π)
    const segment = Math.floor((rot / (2 * Math.PI)) * 4) % 4;
    setCurrentStage(segment + 1); // 1-based
  }, [islandRotation]);

  // Show message only when close to the center of the current segment
  useEffect(() => {
    const threshold = Math.PI / 4; // 45 degrees
    let rot = islandRotation % (2 * Math.PI);
    if (rot < 0) rot += 2 * Math.PI;
    const segment = Math.floor((rot / (2 * Math.PI)) * 4) % 4;
    // Center of each segment
    const segmentCenter = (segment + 0.5) * (Math.PI / 2);
    let distance = Math.abs(rot - segmentCenter);
    // Account for wrap-around at 2π
    if (distance > Math.PI) distance = 2 * Math.PI - distance;
    setShowMessage(distance < threshold);
  }, [islandRotation]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [2.2, 2.2, 2.2];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [4.2, 4.2, 4.2];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.0, 1.0, 1.0];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1.2, 1.2, 1.2];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {showMessage && currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            onRotate={setIslandRotation}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
