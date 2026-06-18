import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import CoreValues from './components/CoreValues';
import About from './components/About';
import FoundersMessage from './components/FoundersMessage';
import FocusAreas from './components/FocusAreas';
import ImpactStats from './components/ImpactStats';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import SuccessStories from './components/SuccessStories';
import Events from './components/Events';
import Donation from './components/Donation';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="relative bg-[#F8FAFC]">
      <Navigation />
      <main>
        <Hero />
        <MarqueeBanner />
        <CoreValues />
        <About />
        <FoundersMessage />
        <FocusAreas />
        <ImpactStats />
        <Programs />
        <Gallery />
        <SuccessStories />
        <Events />
        <Donation />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
