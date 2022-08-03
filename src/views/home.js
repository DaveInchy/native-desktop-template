import React from 'react'
import { View } from 'react-native-web';

export default function Home() {
  document.head.title.replace('*', "Home - Testing")
  return (
    <View styled style={
      {
        position: "fixed",
        top: 80,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - calc(2 * 80px))',
        backgroundColor: '#fff',
        overflow: 'hidden',
        scroll: 'no',
      }
    }>
      Home
    </View>
  )
}
