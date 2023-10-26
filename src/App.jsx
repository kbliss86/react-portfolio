import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';

//pages
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';



import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navigation />
        <Header />

        <Routes>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
