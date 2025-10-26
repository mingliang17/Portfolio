import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { assetPath } from '../utils/assetPath.js'; 


const Developer = ({ animationName = 'waving', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/human/developer.glb');
  const clonedScene = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Load animations and check them
  const waving = useFBX('/models/human/waving.fbx');
  const idle = useFBX('/models/human/idle.fbx');
  const dancing = useFBX('/models/human/dancing.fbx');
  const thankful = useFBX('/models/human/thankful.fbx');

  console.log('Waving animations:', waving.animations);
  console.log('Idle animations:', idle.animations);
  console.log('Dancing animations:', dancing.animations);
  console.log('Thankful animations:', thankful.animations);

  // Assign names
  if (waving.animations[0]) waving.animations[0].name = 'waving';
  if (idle.animations[0]) idle.animations[0].name = 'idle';
  if (dancing.animations[0]) dancing.animations[0].name = 'dancing';
  if (thankful.animations[0]) thankful.animations[0].name = 'thankful';

  const animations = [
    waving.animations[0],
    idle.animations[0],
    dancing.animations[0],
    thankful.animations[0],
  ].filter(Boolean);

  console.log('Total animations loaded:', animations.length);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log('Requested animation:', animationName);
    console.log('Available actions:', Object.keys(actions));
    
    const currentAction = actions[animationName];
    if (!currentAction) {
      console.warn(`Animation "${animationName}" not found`);
      return;
    }
    
    currentAction.reset().fadeIn(0.5).play();
    return () => {
      currentAction.fadeOut(0.5);
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
};

useGLTF.preload('/models/human/developer.glb');
useFBX.preload('/models/human/waving.fbx');
useFBX.preload('/models/human/idle.fbx');
useFBX.preload('/models/human/dancing.fbx');
useFBX.preload('/models/human/thankful.fbx');

export default Developer;