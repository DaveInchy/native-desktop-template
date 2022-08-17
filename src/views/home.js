import React from 'react'
import { View } from 'react-native-web';

export default function Home() {
  return (
    <View styled style={
      {
        position: "relative",
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100vw',
        minHeight: '100vh',
        height: '100vh',
        overflow: 'hidden',
        scroll: 'no',
        zIndex: '-1000',
      }
    }>
      <div className="h-[40vh] w-full flex flex-col justify-center items-center bg-accent">
        <h2 className="text-4xl text-center mb-3 text-primary">desktop application</h2>
        <hr/>
        <h4 className="text-2xl text-center mt-3 text-secondary">build by:<br/><a href="http://github.com/daveinchy">DaveInchy on Github</a></h4>
      </div>
    </View>
  )
}
