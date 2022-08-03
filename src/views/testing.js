import React from "react";
import { View } from 'react-native-web';

export default function Testing()
{
  return (
    <div>
      <section className={'flex flex-col justify-center items-center h-screen'}>
        <h1 className={'font-bold text-red-600 text-2xl uppercase'}>
          3D Layers
        </h1>
        <div className="final__layers">
          <img src="img/back.svg" alt="back layer" className="back" />
          <img src="img/mid.svg" alt="mid layer" className="mid" />
          <img src="img/top.svg" alt="top layer" className="top" />
          <img src="img/tippytop.svg" alt="tippy top layer" className="tippy" />
        </div>
      </section>
    </div>
  );
}
