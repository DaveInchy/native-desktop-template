import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Stylesheets
import './index.css';
import './styles/imports.css';
import './styles/typography.css';
import './styles/buttons.css';

// Pages
import Home from './views/home'
import Settings from './views/settings'

// Components
import NavBar from './components/ui/navbar'
import TopBar from './components/ui/topbar'

export default function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/index" />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Settings />}>
          <Route path="/search/:query"/>
        </Route>
        <Route path="/profile" element={<Settings />} />
        <Route path="/browse" element={<Settings />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
