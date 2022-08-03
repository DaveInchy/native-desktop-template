import React from 'react'
import ReactDOM from 'react-dom/client'
import { View } from 'react-native-web';

require('core-js/stable')
require('regenerator-runtime/runtime')

import './index.css';
import Router from './router';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <View styled={true} style={
      {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fff',
        overflow: 'hidden',
        scroll: 'no',
      }
    }>
      <Router />
    </View>
  </React.StrictMode>
)
