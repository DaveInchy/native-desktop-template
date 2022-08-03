import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

require('core-js/stable')
require('regenerator-runtime/runtime')

// Stylesheets
import './index.css';
import './styles/imports.css';
import './styles/typography.css';
import './styles/buttons.css';

// Icons and ligatures for fonts who have it (e.g. Google Fonts)
import './styles/icons/icons.css';
import './styles/icons/icons-liga.js';

import Home from './views/home'
import About from './views/about'
import Testing from './views/testing'

import NavBar from './components/ui/navbar'
import TopBar from './components/ui/topbar'

export default function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="index" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="testing" element={<Testing />} />
        </Route>
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
