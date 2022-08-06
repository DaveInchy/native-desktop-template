import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Stylesheets
import './index.css';
import './styles/imports.css';
import './styles/components.css';
import './styles/typography.css';
import './styles/buttons.css';

// Pages
import Home from './views/home'
import Settings from './views/settings'
import Profile from './views/profile'
import Search from './views/search'
import Browse from './views/browse'
import NotFound from './views/_template'

// Components
import NavBar from './components/ui/navbar'
import TopBar from './components/ui/topbar'

export default function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />}>
          <Route path="/search/:query"/>
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
