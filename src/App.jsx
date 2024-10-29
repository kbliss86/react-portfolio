import React from 'react';
import { Outlet } from 'react-router-dom';
//components
// import Layout from './components/Layout';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import '../output.css'

// import './App.css';

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};


export default App;
