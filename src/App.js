
import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() =>{
    AOS.init({duration:800, once: true, easing: 'fade-in'});
  })
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer/>
    </>
  );
}

export default App;

