import React from 'react';


//components
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
// import Project from './components/Project';


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;