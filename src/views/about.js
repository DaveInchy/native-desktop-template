import React from 'react'

export default function About() {
  return (
    <div
      className={'flex w-full h-screen justify-center items-center bg-gray-900'}
    >
      <h1
        className={
          'bg-gradient-to-tr from-red-600 to-orange-600 text-transparent text-xl bg-clip-text font-extrabold text-center uppercase text-clip'
        }
      >
        <span className={'uppercase text-8xl'}>About</span>
        <br />
        React Native
        <br />
        Webpack + Electron
        <br />
        Tailwind CSS
        <br />
      </h1>
    </div>
  )
}
