import React, { useState, useEffect } from 'react';
import { Rocket, Recycle, Zap, Globe, ChevronRight, Leaf } from 'lucide-react';

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
            <img src="/logo-animated.svg" alt="TUKUNA FOR MARS" className="w-8 h-8" />
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

      {/* Hero Section — NUEVO DISEÑO ÚNICO Y GENIAL */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Fondo espacial con estrellas animadas */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-amber-900/10"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-200 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Contenido central */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Logo animado grande */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/logo-animated.svg" 
                alt="TUKUNA FOR MARS" 
                className="w-32 h-32 animate-spin" 
                style={{ animationDuration: '15s', animationIterationCount: 'infinite' }}
              />
            </div>
          </div>

          {/* Título con gradiente y sombra */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              TUKUNA
            </span>
            <br />
            <span className="text-white drop-shadow-lg">FOR MARS</span>
          </h1>

          {/* Subtítulo con animación de entrada */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Pioneering sustainable space ecosystems by transforming orbital waste into Martian life resources
          </p>

          {/* Botones con efecto hover y sombra */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('mission')}
              className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
            >
              Join the 2025 Mission
            </button>
            <button
              onClick={() => scrollToSection('agents')}
              className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-md"
            >
              Meet Our Agents
            </button>
          </div>

          {/* Línea de tiempo o estado */}
          <p className="mt-6 text-amber-300 font-medium">
            🚀 Launching operations in 2025
          </p>
        </div>

        {/* Flecha animada hacia abajo */}
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
                <div className="aspect-square bg-gray-900 rounded-xl mb-6 relative overflow-hidden">
                  <img 
                    src="/prototype.jpg" 
                    alt="TUKUNA Prototype" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-amber-300">TUKUNA Prototype — Mars Ready</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Status</span>
                    <span className="text-amber-400 font-bold">In Testing Phase</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Launch Date</span>
                    <span className="text-amber-400 font-bold">Q3 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Mission</span>
                    <span className="text-amber-400 font-bold">Orbital + Surface</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section — Organigrama Vertical */}
      <section id="process" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-amber-400">TUKUNA Cycle</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recycling & manufacturing roadmap — Mars
            </p>
          </div>

          {/* Contenedor del organigrama */}
          <div 
            className="bg-gradient-to-b from-gray-900/30 to-black/50 rounded-2xl p-4 md:p-6 border border-amber-900/20 overflow-hidden"
            style={{ 
              background: 'linear-gradient(180deg, rgba(10,10,15,0.8), rgba(0,0,0,0.9))',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7)'
            }}
          >
            <div 
              className="flow overflow-x-auto overflow-y-hidden"
              dangerouslySetInnerHTML={{
                __html: `
                  <svg viewBox="0 0 1200 1500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet" style="min-width:1200px; display: block;">
                    <defs>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.7"/>
                      </filter>
                      <marker id="arrow" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
                        <path d="M0,0 L12,6 L0,12 z" fill="#e6eef6"/>
                      </marker>
                      <linearGradient id="gradA" x1="0" x2="1"><stop offset="0" stop-color="#14202b"/><stop offset="1" stop-color="#0f1720"/></linearGradient>
                      <linearGradient id="gradB" x1="0" x2="1"><stop offset="0" stop-color="#1a2b38"/><stop offset="1" stop-color="#0f1720"/></linearGradient>
                    </defs>

                    <!-- Title block -->
                    <rect x="10" y="10" width="1180" height="80" rx="12" fill="url(#gradA)" stroke="#0b1116" stroke-width="2"/>
                    <text x="30" y="55" fill="#e6eef6" font-size="22" font-weight="700">Recycling and Manufacturing Routes Map — Mars</text>

                    <!-- Left column: Raw Materials -->
                    <g id="col_left" transform="translate(20,120)">
                      <g class="node" transform="translate(0,0)">
                        <rect x="0" y="0" width="260" height="80" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="28" fill="#ffb37a" font-size="15" font-weight="700">1. Metals</text>
                        <text x="16" y="50" fill="#c6d6e6" font-size="13">Aluminum, scrap, frames</text>
                      </g>
                      <g class="node" transform="translate(0,120)">
                        <rect x="0" y="0" width="260" height="80" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="28" fill="#ffb37a" font-size="15" font-weight="700">2. Plastics</text>
                        <text x="16" y="50" fill="#c6d6e6" font-size="13">PET, PP, PE, PLA, foams</text>
                      </g>
                      <g class="node" transform="translate(0,240)">
                        <rect x="0" y="0" width="260" height="80" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="28" fill="#ffb37a" font-size="15" font-weight="700">3. Textiles & Fibers</text>
                        <text x="16" y="50" fill="#c6d6e6" font-size="13">Clothing, Nomex, polyester</text>
                      </g>
                      <g class="node" transform="translate(0,360)">
                        <rect x="0" y="0" width="260" height="80" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="28" fill="#ffb37a" font-size="15" font-weight="700">4. Carbonaceous / Exp.</text>
                        <text x="16" y="50" fill="#c6d6e6" font-size="13">Char, nitrile gloves, filters</text>
                      </g>
                      <g class="node" transform="translate(0,480)">
                        <rect x="0" y="0" width="260" height="100" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffb37a" font-size="15" font-weight="700">5. Regolith</text>
                        <text x="16" y="52" fill="#c6d6e6" font-size="13">Plagioclase, pyroxene, olivine</text>
                        <text x="16" y="72" fill="#7ea5c6" font-size="12">Base for geopolymers, sintering</text>
                      </g>
                    </g>

                    <!-- Middle column: Processes / Machines -->
                    <g id="col_mid" transform="translate(340,80)">
                      <g transform="translate(0,0)">
                        <rect x="0" y="0" width="340" height="80" rx="10" fill="url(#gradB)" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="28" fill="#ffd9b3" font-size="15" font-weight="700">Degreasing → CNC Cutting → Casting</text>
                        <text x="16" y="50" fill="#cfe7f6" font-size="13">Ultrasonic baths · Cutter · Furnace (crucible)</text>
                      </g>
                      <g transform="translate(0,120)">
                        <rect x="0" y="0" width="340" height="100" rx="10" fill="url(#gradB)" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Washing → Shredding → Extrusion</text>
                        <text x="16" y="52" fill="#cfe7f6" font-size="13">Solar drying · Granulator · Modular extruder</text>
                        <text x="16" y="74" fill="#9cc9e0" font-size="12">Filament / pellets for 3D printing</text>
                      </g>
                      <g transform="translate(0,260)">
                        <rect x="0" y="0" width="340" height="100" rx="10" fill="url(#gradB)" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Shredding → Carding → Paneling</text>
                        <text x="16" y="52" fill="#cfe7f6" font-size="13">Carder · Thermal setting press · Non-woven</text>
                        <text x="16" y="74" fill="#9cc9e0" font-size="12">Insulators · Fillers · Composite reinforcements</text>
                      </g>
                      <g transform="translate(0,420)">
                        <rect x="0" y="0" width="340" height="100" rx="10" fill="url(#gradB)" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Pyrolysis → Activation → Post-proc.</text>
                        <text x="16" y="52" fill="#cfe7f6" font-size="13">Anoxic reactor · Condenser · Activator (steam)</text>
                        <text x="16" y="74" fill="#9cc9e0" font-size="12">Char, activated carbon, composite additive</text>
                      </g>
                      <g transform="translate(0,580)">
                        <rect x="0" y="0" width="340" height="120" rx="10" fill="url(#gradB)" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="32" fill="#ffd9b3" font-size="15" font-weight="700">Solar Concentrator → Sintering / Melting</text>
                        <text x="16" y="54" fill="#cfe7f6" font-size="13">Paraboloid / solar oven · Sintering chamber</text>
                        <text x="16" y="76" fill="#9cc9e0" font-size="12">Blocks, molds, geopolymers, glass</text>
                      </g>
                    </g>

                    <!-- Right column: Final Products -->
                    <g id="col_right" transform="translate(740,120)">
                      <g transform="translate(0,0)">
                        <rect x="0" y="0" width="380" height="90" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Metals → Tools & Cast Parts</text>
                        <text x="16" y="54" fill="#cfe7f6" font-size="13">Wrenches, supports, bushings</text>
                      </g>
                      <g transform="translate(0,120)">
                        <rect x="0" y="0" width="380" height="90" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Plastics → Filament / 3D Parts</text>
                        <text x="16" y="54" fill="#cfe7f6" font-size="13">Casings, utility parts, containers</text>
                      </g>
                      <g transform="translate(0,240)">
                        <rect x="0" y="0" width="380" height="90" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Textiles → Insulators / Fillers</text>
                        <text x="16" y="54" fill="#cfe7f6" font-size="13">Blankets, insulating panels, padding</text>
                      </g>
                      <g transform="translate(0,360)">
                        <rect x="0" y="0" width="380" height="90" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="30" fill="#ffd9b3" font-size="15" font-weight="700">Carbonaceous → Activated Carbon / Char</text>
                        <text x="16" y="54" fill="#cfe7f6" font-size="13">Filters, adsorbents, composite additive</text>
                      </g>
                      <g transform="translate(0,480)">
                        <rect x="0" y="0" width="380" height="100" rx="10" fill="#071823" stroke="#123241" stroke-width="2"/>
                        <text x="16" y="32" fill="#ffd9b3" font-size="15" font-weight="700">Regolith → Blocks / Geopolymers</text>
                        <text x="16" y="54" fill="#cfe7f6" font-size="13">Walls, molds, vitreous ornamentation</text>
                      </g>
                    </g>

                    <!-- Arrows -->
                    <g stroke="#ffb37a" stroke-width="2.5" fill="none" marker-end="url(#arrow)">
                      <path d="M280,160 L340,160"/>
                      <path d="M280,280 L340,280"/>
                      <path d="M280,400 L340,400"/>
                      <path d="M280,520 L340,520"/>
                      <path d="M280,640 L340,640"/>
                    </g>
                    <g stroke="#cfe7f6" stroke-width="2.5" fill="none" marker-end="url(#arrow)">
                      <path d="M680,160 L740,160"/>
                      <path d="M680,280 L740,280"/>
                      <path d="M680,400 L740,400"/>
                      <path d="M680,520 L740,520"/>
                      <path d="M680,640 L740,640"/>
                    </g>
              }}
            />
          </div>

          {/* Leyenda opcional */}
          <div className="mt-8 text-center text-gray-400 text-sm flex flex-wrap justify-center gap-4">
            <span>🟥 Raw Materials</span>
            <span>🟦 Processes / Machines</span>
            <span>🟨 Final Products</span>
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
          <div className="flex justify-center space-x-6 text-gray-500">
            <span>© 2025 TUKUNA FOR MARS</span>
            <span>•</span>
            <span>Regenerating the cosmos, one orbit at a time</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


