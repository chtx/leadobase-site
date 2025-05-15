import React from 'react';
// import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import Timeline from './components/Timeline';
import Industries from './components/Industries';
import Values from './components/Values';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <LeadMagnet />
        <AboutUs />
        <Process />
        <Timeline />
        <Industries />
        <Values />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;