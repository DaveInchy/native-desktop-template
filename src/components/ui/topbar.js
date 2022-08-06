import React from 'react'
import { View } from 'react-native-web';
import { Link, Actions, Navigate } from 'react-router-dom';

import Utils from '/src/classes/utils.ts';

export default function TopBar() {
  const utils = new Utils();
  // utils.methods.newWindow();
  return (
    <View style={
      {
        position: "fixed",
        top: 0,
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '100vw',
        height: '50px',
        overflow: 'hidden',
        scroll: 'no',
      }
    }>
      <div className="max-w-full w-full h-full flex flex-row justify-center items-center bg-base-100">
        <div className="w-[15%] flex flex-col justify-center items-start">
          <Link to={'/'} className="btn btn-primary btn-sm btn-block rounded-md p-0 m-0"><span className="text-transparent/20 text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">Back</span></Link>
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center draggable">
          <h1 className="text-accent font-geometos-rounded text-2xl">Desktop</h1>
        </div>
        <div className="w-[15%] inline float-right justify-center items-end">
          <button onClick={
            () => {
              window.location.href = '/settings';
            }
          } className="inline-block btn btn-primary btn-sm w-[30%] mx-[1.5%] rounded-md p-0 m-0"><span className="text-transparent text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">🔎</span></button>
          <button onClick={
            () => {
              // minimize the window electron main.js

            }
          } className="inline-block btn btn-primary btn-sm w-[30%] mx-[1.5%] rounded-md p-0 m-0"><span className="text-transparent text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">➕</span></button>
          <button onClick={() => window.confirm("Close the application?") ? window.close() : window.alert(JSON.stringify(process.windowsStore))} className="inline-block btn btn-accent btn-sm w-[30%] mx-[1.5%] rounded-md p-0 m-0"><span className="text-transparent text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">✖️</span></button>
        </div>
      </div>
    </View>
  )
}
