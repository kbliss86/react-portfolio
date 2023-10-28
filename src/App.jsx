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
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

// const App = () => {
//   return (
//     <Layout>
//       <h1>Hello World</h1>
//     </Layout>
//   );
// }

export default App;
