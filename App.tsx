import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-[#020202] text-white font-['Inter'] scroll-smooth min-h-screen">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md py-4 px-8 flex justify-between items-center border-b border-white/5">
        <div className="font-['Orbitron'] font-black text-xl text-cyan-500 [text-shadow:_0_0_15px_rgba(0,242,255,0.6)] cursor-pointer">
          V1000_SUPREME
        </div>
        <div className="flex gap-6 text-[10px] font-['Orbitron'] font-bold tracking-widest">
          <a href="#articles" className="hover:text-cyan-400 transition-colors uppercase">Research</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors uppercase">Mission</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors uppercase">Portal</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#083344_0%,_transparent_70%)] opacity-20 -z-10"></div>
        <h1 className="text-6xl md:text-9xl font-black font-['Orbitron'] mb-4 leading-none tracking-tighter">
          HYBRID<br />
          <span className="text-cyan-500 [text-shadow:_0_0_20px_rgba(0,242,255,0.8)]">ENGINE</span>
        </h1>
        <p className="font-['Orbitron'] text-[10px] tracking-[0.5em] text-cyan-400 uppercase opacity-70">
          Core_System_2026
        </p>
      </header>

      {/* Content Container */}
      <main className="max-w-5xl mx-auto px-6 space-y-32 pb-20">
        
        {/* Research Section */}
        <section id="articles" className="scroll-mt-32">
          <h2 className="font-['Orbitron'] text-cyan-500 text-2xl tracking-widest mb-8 uppercase font-black">
            Research_&_Chip_Design
          </h2>
          <div className="bg-[#080808] border border-[#111] p-10 rounded-3xl hover:border-cyan-500/50 transition-all duration-500">
            <h3 className="text-2xl font-bold font-['Orbitron'] text-white mb-6 underline decoration-cyan-500 underline-offset-8">
              Neural-Silicon Integration v4.0
            </h3>
            <p className="text-zinc-500 leading-loose mb-6">
              Supreme V1000 Hybrid Engine represents a paradigm shift in how we perceive computing power. 
              Unlike traditional silicon architectures, the V1000 utilizes a proprietary hybrid layer 
              that merges biological processing logic with high-speed quantum circuits.
            </p>
            <p className="text-zinc-500 leading-loose">
              <strong className="text-white">Advanced Thermal Dynamics:</strong> Is chip design mein aisi veins hain 
              jo biological circulatory systems ki tarah kaam karti hain, jisse high workload mein bhi 
              temperature <span className="text-cyan-400 font-bold">32°C</span> se upar nahi jata.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="scroll-mt-32">
          <h2 className="font-['Orbitron'] text-cyan-500 text-2xl tracking-widest mb-8 uppercase font-black">
            Our_Supreme_Mission
          </h2>
          <div className="bg-[#080808] border border-[#111] p-10 rounded-3xl">
            <p className="text-2xl italic font-light text-zinc-300 border-l-4 border-cyan-500 pl-6 mb-8">
              "Humara lakshya hardware aur neural intelligence ko seamlessly sync karna hai."
            </p>
            <p className="text-zinc-500 leading-loose">
              V1000 Hybrid project hardware efficiency aur biological neural processing ka ek anokha sangam hai. 
              Hum hardware ko itna smart bana rahe hain ki wo 2026 ki digital needs ko hardware level par hi solve kar sake.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32 text-center py-20">
          <h2 className="font-['Orbitron'] text-cyan-500 text-2xl tracking-widest mb-12 uppercase font-black [text-shadow:_0_0_10px_rgba(0,242,255,0.4)]">
            Secure_Uplink
          </h2>
          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-24 rounded-[40px] border border-cyan-500/20 shadow-[0_0_50px_rgba(0,242,255,0.1)]">
            <p className="font-['Orbitron'] text-[10px] tracking-widest text-cyan-500 mb-6 uppercase">
              Direct Channel Active
            </p>
            <a 
              href="mailto:aisahabalive@gmail.com" 
              className="text-2xl md:text-5xl font-black font-['Orbitron'] hover:text-cyan-400 transition-all break-all underline underline-offset-8 decoration-1"
            >
              aisahabalive@gmail.com
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-white/5 opacity-40 text-[10px] font-['Orbitron'] tracking-[0.3em]">
        &copy; 2026 V1000_SUPREME // NEURAL COMPUTING ARCHITECTURE
      </footer>
    </div>
  );
};

export default App;
