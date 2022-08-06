/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react'
import { View } from "react-native-web";
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {

  // select all the buttons with useRef
  const homeButton = useRef();
  const searchButton = useRef();
  const profileButton = useRef();
  const browseButton = useRef();
  const settingsButton = useRef();

  const [activeButton, setActive] = useState(undefined);
  const [inactiveButton, setInactive] = useState(undefined);

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
        height: '65px',
        backgroundColor: '#333',
        overflow: 'hidden',
        scroll: 'no',
        margin: '0 auto',
      }
    }>
      <div className="btm-nav">
        <button>
          <Link style={{ width: '100%', height: '100%' }} to="/">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent bg-accent">
              <span className="p-1">🛖</span>
              <span className="btm-nav-label">Home</span>
            </div>
          </Link>
        </button>
        <button>
          <Link style={{ width: '100%', height: '100%' }} to="/browse">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent bg-accent">
              <span className="p-1">🎞️</span>
              <span className="btm-nav-label">Browse</span>
            </div>
          </Link>
        </button>
        <button>
          <Link style={{ width: '100%', height: '100%' }} to="/search">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent bg-accent">
              <span className="p-1">🔎</span>
              <span className="btm-nav-label">Search</span>
            </div>
          </Link>
        </button>
        <button>
          <Link style={{ width: '100%', height: '100%' }} to="/profile">
            <div className="h-full w-full flex flex-col justify-center items-center text-dark font-bold font-mono bg-clip-text text-transparent bg-accent">
              <span className="p-1">👤</span>
              <span className="btm-nav-label">Profile</span>
            </div>
          </Link>
        </button>
      </div>
    </View>
  )
}
