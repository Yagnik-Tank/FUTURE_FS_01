import { useEffect, useState } from 'react';

export default function Hero() {

  const words = [
    "B.Tech CSE Student",
    "Aspiring Software Engineer",
    "Full Stack Web Developer",
    "Creative Problem Solver"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  // Cursor Blink
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(timeout2);
  }, [blink]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();

    const el = document.getElementById('projects');

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();

    const el = document.getElementById('contact');

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '10rem',
      }}
    >
      {/* Background Glow */}
      <div className="glow-bg glow-primary" />
      <div className="glow-bg glow-secondary" />

      <div className="container">
        <div className="grid-2">

          {/* Left Side */}
          <div style={{ position: 'relative', zIndex: 2 }}>

            {/* Badge */}
            <span
              style={{
                display: 'inline-block',
                background: 'var(--primary-glow)',
                color: 'var(--primary)',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                border: '1px solid var(--surface-border)',
                marginBottom: '1.5rem',
              }}
            >
              Open to Internships & Opportunities
            </span>

            {/* Main Heading */}
            <h1
              style={{
                fontSize: '4rem',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                fontWeight: 800,
              }}
            >
              Hi, I'm <br />

              <span
                style={{
                  background:
                    'linear-gradient(135deg, var(--primary), var(--secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Yagnik Tank
              </span>
            </h1>

            {/* Typing Animation */}
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              I am a&nbsp;

              <span
                style={{
                  color: 'var(--primary)',
                  borderRight: '2px solid currentColor',
                  paddingRight: '4px',
                }}
              >
                {words[index].substring(0, subIndex)}
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              Passionate B.Tech CSE student and aspiring Software Engineer
              focused on building modern websites, scalable web applications,
              and innovative digital experiences using the latest technologies.
            </p>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn btn-primary"
              >
                View My Projects

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="btn btn-secondary"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            {/* Rotating Ring */}
            <div
              className="spinning-ring"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                border: '1px dashed var(--surface-border)',
                borderRadius: '50%',
                animation: 'spin 40s linear infinite',
              }}
            />

            {/* Image Card */}
            <div
              className="glass"
              style={{
                borderRadius: '30px',
                padding: '1.5rem',
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '1',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                transform:
                  'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                transition: 'transform 0.5s ease',
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                const x =
                  e.clientX - rect.left - rect.width / 2;

                const y =
                  e.clientY - rect.top - rect.height / 2;

                e.currentTarget.style.transform =
                  `perspective(1000px) rotateY(${x * 0.05}deg)
                  rotateX(${-y * 0.05}deg) scale(1.02)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1)';
              }}
            >
              <img
                src="/hero_developer_graphic.png"
                alt="Yagnik Tank"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '18px',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: 0.7,
          }}
        >
          <span
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            Scroll Down
          </span>

          <div
            style={{
              width: '24px',
              height: '40px',
              border: '2px solid var(--text-muted)',
              borderRadius: '12px',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'var(--primary)',
                borderRadius: '50%',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                animation:
                  'scroll-dot 1.8s infinite ease-in-out',
              }}
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scroll-dot {
          0% {
            top: 6px;
            opacity: 1;
          }

          50% {
            top: 22px;
            opacity: 0.3;
          }

          100% {
            top: 6px;
            opacity: 1;
          }
        }

        @media (max-width: 968px) {
          #home {
            padding-top: 8rem;
          }

          h1 {
            font-size: 3rem !important;
          }

          h2 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}