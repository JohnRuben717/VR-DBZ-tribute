import dynamic from 'next/dynamic';
import React from 'react';

const AFrameScene = dynamic(() => import('@/components/AFrameScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <h1>My Next.js and A-Frame App</h1>
      <AFrameScene />
    </div>
  );
}
