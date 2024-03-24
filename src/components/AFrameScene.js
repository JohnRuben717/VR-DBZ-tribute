"use client";
// components/AFrameScene.js
import 'aframe';
import { Scene, Entity } from 'aframe-react';

export default function AFrameScene() {
  return (
    <Scene>
      <Entity
        geometry={{ primitive: 'plane' }}
        material={{ color: 'blue' }}
        position={{ x: 0, y: -1, z: -5}}
        rotation={{ x: 270, y: 0, z: 0 }}
        scale={{ x: 5, y: 5, z: 5 }}

        />
      <Entity
        geometry={{ primitive: 'box' }}
        material={{ color: 'red' }}
        position={{ x: 0, y: 0, z: -5 }}
      />
    </Scene>
  );
}
