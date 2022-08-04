import React from 'react'
import { View } from "react-native-web";
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <View styled style={
      {
        position: "fixed",
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100vw',
        maxWidth: '100vw',
        height: '50px',
        backgroundColor: '#333',
        overflow: 'hidden',
        scroll: 'no',
        margin: '0 auto',
      }
    }>
      <div className="w-full h-full flex flex-row justify-center items-center bg-base-100">
        <div className="w-[25%] h-full border-x border-1 border-primary flex flex-col justify-center items-center">
          <Link style={{ width: '100%', height: '100%' }} to="/search">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent/30 bg-accent">
              🔎
            </div>
          </Link>
        </div>
        <div className="w-[25%] h-full border-x border-1 border-primary flex flex-col justify-center items-center">
          <Link style={{width: '100%', height: '100%'}} to="/browse">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent/30 bg-accent">
              👀
            </div>
          </Link>
        </div>
        <div className="w-[25%] h-full border-x border-1 border-primary flex flex-col justify-center items-center">
          <Link style={{ width: '100%', height: '100%' }} to="/profile">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent/30 bg-accent">
              👤
            </div>
          </Link>
        </div>
        <div className="w-[25%] h-full border-x border-1 border-primary flex flex-col justify-center items-center">
          <Link style={{ width: '100%', height: '100%' }} to="/settings">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent/30 bg-accent">
              ⚙️
            </div>
          </Link>
        </div>
      </div>
    </View>
  )
}
