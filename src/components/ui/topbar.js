import React from 'react'
import { View } from 'react-native-web';

export default function TopBar() {
  return (
    <View styled style={
      {
        position: "fixed",
        top: 0,
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
      <div class="w-[15%]">

      </div>
      <div className="w-[60%] flex flex-col justify-center items-center h-[80px] text-4xl uppercase">
        <h1 className="text-rose-700 font-geometos-rounded">Native</h1>
      </div>
      <div class="w-[15%]">

      </div>
    </View>
  )
}
