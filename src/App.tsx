import { useState } from 'react';
import { Header } from './components/Layout/Header';
import { TopNav } from './components/Layout/TopNav';
import { Footer } from './components/Layout/Footer';
import { About } from './components/tabs/About';
import { Experience } from './components/tabs/Experience';
import { Projects } from './components/tabs/Projects';
import { Contact } from './components/tabs/Contact';
import { Certification } from './components/tabs/Certification';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    'Java', 'Spring Boot', 'Node.js', 'TypeScript', 
    'PostgreSQL', 'MySQL', 'Docker', 'Git', 'AWS', 'APIs REST'
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-400 font-sans selection:bg-blue-500/30">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <Header setActiveTab={setActiveTab} />

      <div className="pt-16 max-w-5xl mx-auto px-4 md:px-6 space-y-6">
        <main className="min-h-[300px]">
          {activeTab === 'about' && <About skills={skills} />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'certification' && <Certification />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </main>

        <Footer />
      </div>
    </div>
  );
}