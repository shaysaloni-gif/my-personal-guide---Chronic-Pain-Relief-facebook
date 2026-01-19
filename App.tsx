import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import Suitability from './components/Suitability';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Suitability />
      <About />
      <Testimonials />
      <ContactForm />
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} שי סלוני - ליווי לשחרור מכאב כרוני. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;