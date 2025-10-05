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
    {/* Process Section — Organigrama Vertical tipo StarCraft */}
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

    {/* Contenedor del organigrama con estilo StarCraft */}
    <div 
      className="bg-gradient-to-b from-gray-900/30 to-black/50 rounded-2xl p-4 md:p-6 border border-emerald-900/30 overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, rgba(10,10,15,0.9), rgba(0,0,0,0.95))',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
        border: '2px solid rgba(0, 255, 128, 0.2)',
        position: 'relative'
      }}
    >
      <div 
        className="flow overflow-x-auto overflow-y-hidden"
        dangerouslySetInnerHTML={{
          __html: `
            <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet" style="min-width:1200px; display: block;">
              <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#00ff80" flood-opacity="0.3"/>
                </filter>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="#00ff80"/>
                </marker>
                <linearGradient id="gradA" x1="0" x2="1"><stop offset="0" stop-color="#002a1c"/><stop offset="1" stop-color="#001a0f"/></linearGradient>
                <linearGradient id="gradB" x1="0" x2="1"><stop offset="0" stop-color="#003a2c"/><stop offset="1" stop-color="#001a0f"/></linearGradient>
              </defs>

              <!-- Title block -->
              <rect x="10" y="10" width="1180" height="60" rx="8" fill="url(#gradA)" stroke="#00ff80" stroke-width="1"/>
              <text x="30" y="45" fill="#00ff80" font-size="20" font-weight="700" font-family="Arial">Recycling and Manufacturing Routes Map — Mars</text>

              <!-- Left column: Raw Materials -->
              <g id="col_left" transform="translate(20,90)">
                <g class="node" transform="translate(0,0)">
                  <rect x="0" y="0" width="260" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#00ff80" font-size="14" font-weight="700" font-family="Arial">1. Metals</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Aluminum, scrap, frames</text>
                </g>

                <g class="node" transform="translate(0,90)">
                  <rect x="0" y="0" width="260" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#00ff80" font-size="14" font-weight="700" font-family="Arial">2. Plastics</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">PET, PP, PE, PLA, foams</text>
                </g>

                <g class="node" transform="translate(0,180)">
                  <rect x="0" y="0" width="260" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#00ff80" font-size="14" font-weight="700" font-family="Arial">3. Textiles & Fibers</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Clothing, Nomex, polyester</text>
                </g>

                <g class="node" transform="translate(0,270)">
                  <rect x="0" y="0" width="260" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#00ff80" font-size="14" font-weight="700" font-family="Arial">4. Carbonaceous / Exp.</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Char, nitrile gloves, filters</text>
                </g>

                <g class="node" transform="translate(0,360)">
                  <rect x="0" y="0" width="260" height="80" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#00ff80" font-size="14" font-weight="700" font-family="Arial">5. Regolith</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Plagioclase, pyroxene, olivine</text>
                  <text x="16" y="62" fill="#00aa55" font-size="11" font-family="Arial">Base for geopolymers</text>
                </g>
              </g>

              <!-- Middle column: Processes / Machines -->
              <g id="col_mid" transform="translate(340,70)">
                <!-- Metals route -->
                <g transform="translate(0,0)">
                  <rect x="0" y="0" width="340" height="70" rx="6" fill="url(#gradB)" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Degreasing → CNC Cutting → Casting</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Ultrasonic baths · Cutter · Furnace</text>
                </g>

                <!-- Plastics route -->
                <g transform="translate(0,90)">
                  <rect x="0" y="0" width="340" height="80" rx="6" fill="url(#gradB)" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Washing → Shredding → Extrusion</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Solar drying · Granulator · Extruder</text>
                  <text x="16" y="62" fill="#00aa55" font-size="11" font-family="Arial">Filament for 3D printing</text>
                </g>

                <!-- Textiles route -->
                <g transform="translate(0,190)">
                  <rect x="0" y="0" width="340" height="80" rx="6" fill="url(#gradB)" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Shredding → Carding → Paneling</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Carder · Thermal press · Non-woven</text>
                  <text x="16" y="62" fill="#00aa55" font-size="11" font-family="Arial">Insulators · Fillers</text>
                </g>

                <!-- Carbonaceous route -->
                <g transform="translate(0,300)">
                  <rect x="0" y="0" width="340" height="80" rx="6" fill="url(#gradB)" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Pyrolysis → Activation → Post-proc.</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Reactor · Condenser · Activator</text>
                  <text x="16" y="62" fill="#00aa55" font-size="11" font-family="Arial">Char, activated carbon</text>
                </g>

                <!-- Regolith route -->
                <g transform="translate(0,410)">
                  <rect x="0" y="0" width="340" height="90" rx="6" fill="url(#gradB)" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Solar Concentrator → Sintering</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Paraboloid · Sintering chamber</text>
                  <text x="16" y="62" fill="#00aa55" font-size="11" font-family="Arial">Blocks, geopolymers, glass</text>
                </g>
              </g>

              <!-- Right column: Final Products -->
              <g id="col_right" transform="translate(740,90)">
                <g transform="translate(0,0)">
                  <rect x="0" y="0" width="380" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Metals → Tools & Cast Parts</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Wrenches, supports, bushings</text>
                </g>

                <g transform="translate(0,90)">
                  <rect x="0" y="0" width="380" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Plastics → Filament / 3D Parts</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Casings, utility parts, containers</text>
                </g>

                <g transform="translate(0,180)">
                  <rect x="0" y="0" width="380" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Textiles → Insulators / Fillers</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Blankets, panels, padding</text>
                </g>

                <g transform="translate(0,270)">
                  <rect x="0" y="0" width="380" height="70" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Carbonaceous → Activated Carbon</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Filters, adsorbents, additives</text>
                </g>

                <g transform="translate(0,360)">
                  <rect x="0" y="0" width="380" height="80" rx="6" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
                  <text x="16" y="25" fill="#ffcc00" font-size="14" font-weight="700" font-family="Arial">Regolith → Blocks / Geopolymers</text>
                  <text x="16" y="45" fill="#00cc66" font-size="12" font-family="Arial">Walls, molds, vitreous ornamentation</text>
                </g>
              </g>

              <!-- Arrows from left to middle -->
              <g stroke="#00ff80" stroke-width="2" fill="none" marker-end="url(#arrow)">
                <path d="M280,125 L340,125"/>
                <path d="M280,215 L340,215"/>
                <path d="M280,305 L340,305"/>
                <path d="M280,395 L340,395"/>
                <path d="M280,485 L340,485"/>
              </g>

              <!-- Arrows from middle to right -->
              <g stroke="#00cc66" stroke-width="2" fill="none" marker-end="url(#arrow)">
                <path d="M680,125 L740,125"/>
                <path d="M680,215 L740,215"/>
                <path d="M680,305 L740,305"/>
                <path d="M680,395 L740,395"/>
                <path d="M680,485 L740,485"/>
              </g>

              <!-- Footer notes -->
              <rect x="10" y="720" width="1180" height="70" rx="8" fill="#002a1c" stroke="#00ff80" stroke-width="1"/>
              <text x="30" y="745" fill="#00ff80" font-size="13" font-weight="700" font-family="Arial">Operational Notes</text>
              <text x="30" y="765" fill="#00cc66" font-size="11" font-family="Arial">• Protect optics and mechanisms from Martian dust • Prioritize solar processes • Design modular equipment</text>
            </svg>
          `
        }}
      />
    </div>

    {/* Leyenda tipo HUD de StarCraft */}
    <div className="mt-6 text-center text-sm flex flex-wrap justify-center gap-4 text-gray-400">
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-sm"></span>
        Raw Materials
      </span>
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-sm"></span>
        Processes / Machines
      </span>
      <span className="flex items-center gap-2">
        <span className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-sm"></span>
        Final Products
      </span>
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



