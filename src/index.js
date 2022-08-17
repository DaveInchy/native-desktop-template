import React from 'react'
import ReactDOM from 'react-dom/client'
import { View } from 'react-native-web';

// Stylesheets
import './index.css';
import './styles/imports.css';
import './styles/components.css';
import './styles/typography.css';
import './styles/buttons.css';

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
      }
    }>
      <Router />
    </View>
  </React.StrictMode>
)
