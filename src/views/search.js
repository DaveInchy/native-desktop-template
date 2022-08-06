import React from 'react'
import { View } from 'react-native-web';

export default function Search() {
  return (
    <View styled style={
      {
        position: "relative",
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100vw',
        minHeight: '100vh',
        height: '100vh',
        backgroundColor: '#3f3f3f',
        color: '#e3e3e3',
        overflow: 'hidden',
        scroll: 'no',
        zIndex: '-1000',
      }
    }>
      <div className="form-control">
        <div className="input-group">
          <input type="text" placeholder="Search…" className="input input-bordered" />
          <button className="btn btn-square btn-accent border-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
    </View>
  )
}
