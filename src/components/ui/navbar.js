/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react'
import { View } from "react-native-web";
import { Link } from 'react-router-dom';


// Stylesheets
import '../../index.css';
import '../../styles/imports.css';
import '../../styles/components.css';
import '../../styles/typography.css';
import '../../styles/buttons.css';

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
        overflow: 'hidden',
        scroll: 'no',
        margin: '0 auto',
      }
    }>
      <div className="flex flex-row w-full h-full bg-primary">
        <div className="btm-nav w-[420px] ">
          <button className="border border-solid border-1 border-primary">
            <Link style={{ width: '100%', height: '100%' }} to="/">
              <div className="flex flex-col items-center justify-center w-full h-full font-mono font-bold text-transparent text-accent bg-clip-text bg-accent">
                <span className="p-1 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </span>
                <span className="btm-nav-label text-primary">Home</span>
              </div>
            </Link>
          </button>
          <button className="border border-solid border-1 border-primary">
            <Link style={{ width: '100%', height: '100%' }} to="/browse">
              <div className="flex flex-col items-center justify-center w-full h-full font-mono font-bold text-transparent text-accent bg-clip-text bg-accent">
                <span className="p-1 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </span>
                <span className="btm-nav-label text-primary">Browse</span>
              </div>
            </Link>
          </button>
          <button className="border border-solid border-1 border-primary">
            <Link style={{ width: '100%', height: '100%' }} to="/search">
              <div className="flex flex-col items-center justify-center w-full h-full font-mono font-bold text-transparent text-accent bg-clip-text bg-accent">
                <span className="p-1 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <span className="btm-nav-label text-primary">Search</span>
              </div>
            </Link>
          </button>
          <button className="border border-solid border-1 border-primary">
            <Link style={{ width: '100%', height: '100%' }} to="/profile">
              <div className="flex flex-col items-center justify-center w-full h-full font-mono font-bold text-transparent text-accent bg-clip-text bg-accent">
                <span className="p-1 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </span>
                <span className="btm-nav-label text-primary">Profile</span>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </View>
  )
}
