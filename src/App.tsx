import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FreeClasses from './components/FreeClasses';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PreQualifierModal from './components/PreQualifierModal';

function App() {
  const [isGlobalModalOpen, setIsGlobalModalOpen] = useState(false);

  const handleGlobalModalSubmit = (answers: { question1: string; question2: string }) => {
    const message = `Hi, I'd like to speak with an expert advisor.\n\nExperience Level: ${answers.question1}\nPrimary Goal: ${answers.question2}\n\nLooking forward to your guidance.`;

    window.open(`https://wa.me/254769879268?text=${encodeURIComponent(message)}`, '_blank');
    setIsGlobalModalOpen(false);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <FreeClasses />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton onOpenModal={() => setIsGlobalModalOpen(true)} />

      <PreQualifierModal
        isOpen={isGlobalModalOpen}
        onClose={() => setIsGlobalModalOpen(false)}
        onSubmit={handleGlobalModalSubmit}
      />
    </div>
  );
}

export default App;
