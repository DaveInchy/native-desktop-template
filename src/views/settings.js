import React from 'react'
import { View } from 'react-native-web';

export default function Settings() {
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
        color: '#e3e3e3',
        overflow: 'hidden',
        scroll: 'no',
        zIndex: '-1000',
      }
    }>
      Settings
    </View>
  )
}
