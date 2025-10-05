import React, { useState, useEffect } from 'react';
import { Rocket, Recycle, Zap, Globe, Users, ChevronRight, Leaf } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              TUKUNA FOR MARS
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['hero', 'mission', 'agents', 'process', 'sponsors'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors hover:text-emerald-400 ${
                  activeSection === section ? 'text-emerald-400' : 'text-gray-300'
                }`}
              >
                {section === 'hero' ? 'Home' : section}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-amber-900/10"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-200 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Recycle className="w-24 h-24 text-emerald-400 animate-spin" style={{ animationDuration: '25s' }} />
              <Leaf className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-amber-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              TUKUNA
            </span>
            <br />
            <span className="text-white">FOR MARS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Pioneering sustainable space ecosystems by transforming orbital waste into Martian life resources
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('mission')}
              className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              Join the 2025 Mission
            </button>
            <button
              onClick={() => scrollToSection('agents')}
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Meet Our Agents
            </button>
          </div>
          <p className="mt-6 text-amber-300 font-medium">Launching operations in 2025</p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-400 rotate-90" />
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-amber-400">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              To build a regenerative loop between Earth's orbit and Mars colonies using AI-driven waste transformation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Orbital Regeneration",
                description: "Harvest defunct satellites and debris to prevent Kessler Syndrome and reclaim raw materials."
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Martian Sustainability",
                description: "Convert space waste into oxygen, water, metals, and polymers for Mars habitats and agriculture."
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Interplanetary Loop",
                description: "Create a closed-loop economy between Earth orbit, the Moon, and Mars by 2030."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-amber-400 transition-all group">
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              TUKUNA <span className="text-amber-400">Agents</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Autonomous bio-inspired robots designed for zero-gravity waste processing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                {
                  name: "TUKUNA-α",
                  specialty: "Debris Capture & Sorting",
                  stats: "AI vision + magnetic nets"
                },
                {
                  name: "TUKUNA-β",
                  specialty: "In-Orbit Smelting",
                  stats: "Solar-powered plasma furnace"
                },
                {
                  name: "TUKUNA-γ",
                  specialty: "Mars Surface Replication",
                  stats: "3D-prints habitats from recycled alloys"
                }
              ].map((agent, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-amber-400 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                      <p className="text-amber-400 text-sm">{agent.specialty}</p>
                      <p className="text-gray-400 text-sm">{agent.stats}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-amber-900/20 rounded-2xl p-8 border border-amber-700/30">
                <div className="aspect-square bg-gray-900 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-amber-900/20"></div>
                  <Recycle className="w-24 h-24 text-amber-400 opacity-60" />
                  <Leaf className="absolute top-4 right-4 w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-amber-300">2025 Launch Countdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Orbital Station</span>
                    <span className="text-amber-400 font-bold">Under Construction</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Agent Fleet</span>
                    <span className="text-amber-400 font-bold">In Testing Phase</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Mars Pilot Site</span>
                    <span className="text-amber-400 font-bold">Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-amber-400">TUKUNA Cycle</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A closed-loop system from Earth orbit to Martian soil
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Capture", desc: "Agents collect debris using adaptive nets and robotic arms" },
              { step: "2", title: "Refine", desc: "On-station smelting separates metals, plastics, and volatiles" },
              { step: "3", title: "Replicate", desc: "Materials 3D-print tools, habitats, and life support systems" },
              { step: "4", title: "Regenerate", desc: "Waste becomes oxygen, water, and soil for Mars colonies" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visionary <span className="text-amber-400">Partners</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations pioneering the future of interplanetary sustainability
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['NASA', 'ESA', 'Mars Society', 'SpaceX'].map((sponsor, index) => (
              <div key={index} className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 hover:border-amber-400 transition-all flex items-center justify-center">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-amber-800/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Leaf className="w-12 h-12 text-amber-400" />
              <Recycle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-emerald-400" />
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            TUKUNA FOR MARS — Turning space waste into Martian life since 2025.
          </p>
          <div className="flex justify-center space-x-6 text-gray-50