import React from 'react';
import './App.css';
import './components/GlobalStyles.css';
import PremiumHero from './components/PremiumHero';
import PremiumServices from './components/PremiumServices';
import PremiumAbout from './components/PremiumAbout';
import PremiumAchievements from './components/PremiumAchievements';
import SimpleFooter from './components/SimpleFooter';
import Whatsapp from './components/Whatsapp';

function App() {
  return (
    <div className="app">
      <PremiumHero />
      <PremiumServices />
      <PremiumAchievements />
      <PremiumAbout />
      <Whatsapp />
      <SimpleFooter />
    </div>
  );
}

export default App;
