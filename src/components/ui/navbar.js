import React from 'react'
import { View } from "react-native-web";

export default function NavBar() {
  return (
    <View styled style={
      {
        position: "fixed",
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        scroll: 'no',
      }
    }>

    </View>
  )
}
