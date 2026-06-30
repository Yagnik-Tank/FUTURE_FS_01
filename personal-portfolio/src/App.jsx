import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--surface-border)',
          backgroundColor: 'var(--bg-color)',
          padding: '4rem 0 3rem 0',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            
  </div>       
            <p>© {currentYear} Yagnik Tank . All rights reserved.</p>
          </div>
        
      </footer>
    </>
  );
}

export default App;
