/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model's meshes, we need to iterate through
 * each part of our model's meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { a } from "@react-spring/three";
import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export function Island({
  setCurrentStage,
  onRotate,
  ...props
}) {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPointerX, setPrevPointerX] = useState(null);

  // Add auto-rotation
  useFrame((_, delta) => {
    if (islandRef.current && !isDragging) {
      // Reduce rotation speed
      islandRef.current.rotation.y -= 0.4 * delta;
    }
    // Report rotation to parent
    if (onRotate && islandRef.current) {
      onRotate(islandRef.current.rotation.y);
    }
  });

  // Pointer event handlers for drag-to-rotate
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setPrevPointerX(e.clientX);
    // Prevent default to avoid unwanted selection
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    setPrevPointerX(null);
    e.target.releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || prevPointerX === null) return;
    const deltaX = e.clientX - prevPointerX;
    if (islandRef.current) {
      // Adjust sensitivity as needed
      islandRef.current.rotation.y -= deltaX * 0.003;
    }
    setPrevPointerX(e.clientX);
  };

  const handlePointerOut = () => {
    setIsDragging(false);
    setPrevPointerX(null);
  };

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group
      ref={islandRef}
      {...props}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerOut}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}
