export default function About() {
  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies Learned' },
    { value: '100%', label: 'Learning Dedication' },
    { value: '1+', label: 'Internship Experience' },
  ];

  const highlights = [
    "B.Tech CSE Student",
    "Aspiring Software Engineer & Problem Solver",
    "Full Stack Web Development Enthusiast",
    "Strong Interest in React, JavaScript & PHP",
    "Focused on Building Real-World Projects",
  ];

  const handleDownloadCV = (e) => {
    e.preventDefault();
    alert("Resume download triggered!");
  };

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>About Me</h2>

          <p>
            Passionate B.Tech CSE student, aspiring Full Stack Developer,
            and future Software Engineer.
          </p>
        </div>

        <div className="grid-2">

          {/* Left Side */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            <div
              className="glass"
              style={{
                borderRadius: '24px',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px var(--card-shadow)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.6rem',
                  marginBottom: '1rem',
                  color: 'var(--primary)',
                }}
              >
                My Journey
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                }}
              >
                Hello! I'm Yagnik Tank, a B.Tech Computer Science
                Engineering student with a strong passion for software
                development, web technologies, and modern digital solutions.
                My goal is to become a successful Software Engineer and build
                innovative applications that solve real-world problems.
              </p>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                }}
              >
                I have worked on projects like Employee Management Systems,
                Event Management Systems, Customized PC Build Websites, Smart
                Attendance Systems, and Virtual Travel Guide platforms. I am
                continuously learning modern technologies and improving my
                problem-solving skills to become a better developer every day.
              </p>
            </div>

            {/* Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass"
                  style={{
                    borderRadius: '16px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--surface-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: '800',
                      color: 'var(--primary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {stat.value}
                  </h4>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyItems: 'center',
              gap: '2.5rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '1.5rem',
                }}
              >
                Building Modern &
                <br />

                <span
                  style={{
                    background:
                      'linear-gradient(135deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Creative Software Solutions
                </span>
              </h3>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                }}
              >
                {highlights.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.5',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: 'var(--primary-glow)',
                        color: 'var(--primary)',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        marginTop: '2px',
                      }}
                    >
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Box */}
            <div
              className="glass"
              style={{
                borderRadius: '20px',
                padding: '2rem',
                borderLeft: '4px solid var(--primary)',
              }}
            >
              <blockquote
                style={{
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  lineHeight: '1.6',
                  fontSize: '1.05rem',
                }}
              >
                "My goal is to become a skilled Software Engineer who creates
                innovative, modern, and impactful digital solutions for the
                future."
              </blockquote>
            </div>

           
              
        
            </div>
          </div>
        </div>
    </section>
  );
}