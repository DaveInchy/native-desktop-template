import React from 'react'
import ReactDOM from 'react-dom/client'
import { View } from 'react-native-web';

import './index.css';
import Router from './router';

require('core-js/stable')
require('regenerator-runtime/runtime')

ReactDOM.createRoot(
  document.getElementById('app')
).render(
  <React.StrictMode>
    <View style={
      {
        position: 'absolute',
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
        maxWidth: '100vw',
        backgroundColor: '#e3e3e3',
        overflow: 'scroll-y',
        scroll: 'off',
      }
    }>
      <Router />
    </View>
  </React.StrictMode>
)
