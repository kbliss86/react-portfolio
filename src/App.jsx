import React from 'react'
import { useState } from 'react'

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';

//pages
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';



import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Header />

        <switch>
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
        </switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App
