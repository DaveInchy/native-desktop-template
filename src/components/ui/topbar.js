/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { View } from 'react-native-web';
import { Link } from 'react-router-dom';

require('core-js/stable');
require("regenerator-runtime/runtime");

export default function TopBar() {
  const handleClose = () => {
    var ask = window.confirm("Are You Sure to Close this Application?") ? true : false
    // eslint-disable-next-line no-unused-expressions
    ask ? window.close() : null;
    return ask;
  };

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
      <div className="flex flex-row items-center justify-center w-full h-full max-w-full bg-primary">
        
        <div className="w-[25%] inline float-left">
          <Link to={'/settings'}
            className="btn btn-primary btn-sm w-[90%] mx-[3%] rounded-none p-0 m-0">
            <span className="text-transparent/20 text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono uppercase">Settings</span>
          </Link>
        </div>
        
        <div className="w-[50%] flex flex-col justify-center items-center draggable">
          <h1 className="mt-2 text-2xl uppercase text-accent font-geometos-rounded">github/DaveInchy</h1>
        </div>

        <div className="w-[25%] inline float-right">
          <button onClick={handleClose} className="inline-block btn btn-secondary btn-sm w-[30%] rounded-none p-0 m-0">
            <span className="text-transparent text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">
              <div className="flex flex-col items-center justify-center w-full h-full p-0 mx-auto my-0" comment={`
                // LEFT ACTION BUTTON - USE HERO ICONS JSX CODE from HEROICONS.COM
              `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </span>
          </button>
          
          <button onClick={handleClose} className="inline-block btn btn-secondary btn-sm w-[30%] mx-[3%] rounded-none p-0 m-0">
            <span className="text-transparent text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">
              <div className="flex flex-col items-center justify-center w-full h-full p-0 mx-auto my-0" comment={`
                // MIDDLE ACTION BUTTON - USE HERO ICONS JSX CODE from HEROICONS.COM
              `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </span>
          </button>
          
          <button onClick={handleClose} className="inline-block btn btn-accent btn-sm w-[30%] rounded-none p-0 m-0">
            <span className="text-transparent text-[#fff] bg-clip-text font-black bg-slate-100 font-noto-mono">
              <div className="flex flex-col items-center justify-center w-full h-full p-0 mx-auto my-0" comment={`
                // RIGHT ACTION BUTTON - USE HERO ICONS JSX CODE from HEROICONS.COM
              `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </span>
          </button>

        </div>
      </div>
    </View>
  )
}
