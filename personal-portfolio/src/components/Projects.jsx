import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' }
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Employee Management System',
      description: 'A complete employee management platform with admin dashboard, employee records management, authentication system, and responsive UI design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      image: '/project_1.png',
    },
    {
      id: 2,
      title: 'Customized PC Build Website',
      description: 'A modern custom PC building website where users can select components, view compatibility, place orders, and track builds online.',
      tech: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
      image: '/project_2.png',
    },
    {
      id: 3,
      title: 'Virtual Travel Guide',
      description: 'A responsive travel guide platform featuring destination details, user management, admin dashboard, and interactive travel experiences.',
      tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
      image: '/project_3.png',
    },
    {
      id: 4,
      title: 'Smart Attendance System',
      description: 'A smart attendance management system using QR and face recognition concepts for efficient and automated attendance tracking.',
      tech: ['Java', 'MySQL', 'PHP', 'HTML'],
      image: '/project_4.png',
    }
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((proj) => proj.category === filter);

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="glow-bg glow-primary" style={{ top: '30%', right: '-10%' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>My Projects</h2>
          <p>
            A collection of projects showcasing my skills in full stack development, 
            frontend design, and software engineering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => {
            const isActive = filter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  background: isActive
                    ? 'linear-gradient(135deg, var(--primary), var(--secondary))'
                    : 'var(--surface-color)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: isActive ? 'none' : '1px solid var(--surface-border)',
                  borderRadius: '50px',
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.9rem',
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  boxShadow: isActive ? '0 4px 10px var(--primary-glow)' : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--surface-border)';
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1.77',
                  overflow: 'hidden',
                  position: 'relative',
                  borderBottom: '1px solid var(--surface-border)',
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* Category Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(8, 9, 13, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--surface-border)',
                    color: 'var(--primary)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {categories.find((c) => c.id === proj.category)?.label || proj.category}
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: 700 }}>
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '2rem',
                    }}
                  >
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--surface-border)',
                          color: 'var(--text-secondary)',
                          padding: '0.25rem 0.55rem',
                          borderRadius: '6px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Elegant Custom Interactive Buttons */}
                  <div style={{ display: 'flex', gap: '0.8rem' }}>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Glassmorphic Project Details Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div
            className="glass modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--surface-color)',
              border: '1px solid var(--surface-border)',
              padding: '2.5rem',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--surface-border)',
                paddingBottom: '1.2rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  background: 'linear-gradient(to right, var(--text-primary), var(--primary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {activeModalProject.title}
              </h3>

              <button
                onClick={() => setActiveModalProject(null)}
                style={{
                  background: 'var(--surface-border)',
                  border: 'none',
                  color: 'var(--text-primary)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  transition: 'background 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--primary-glow)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'var(--surface-border)')}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  aspectRatio: '1.77',
                  objectFit: 'cover',
                  border: '1px solid var(--surface-border)',
                }}
              />

              <div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Overview & Scope
                </h4>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '0.95rem',
                  }}
                >
                  {activeModalProject.details}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    marginBottom: '0.7rem',
                  }}
                >
                  Core Features & Technical Specs
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                  }}
                >
                  {activeModalProject.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                      }}
                    >
                      <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Controls */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--surface-border)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {activeModalProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--surface-border)',
                        color: 'var(--text-secondary)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '8px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
          
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}