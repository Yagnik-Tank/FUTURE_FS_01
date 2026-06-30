import { useState } from 'react';

export default function Skills() {

  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend Skills' },
    { id: 'backend', label: 'Backend Skills' },
    { id: 'tools', label: 'Tools & Technologies' },
  ];

  const skillsData = {

    frontend: [
      {
        name: 'HTML5',
        level: 95,
        desc: 'Semantic HTML structure, forms, responsive layouts, and modern webpage development.',
      },

      {
        name: 'CSS3',
        level: 90,
        desc: 'Responsive design, Flexbox, Grid, animations, media queries, and modern UI styling.',
      },

      {
        name: 'JavaScript',
        level: 88,
        desc: 'DOM manipulation, ES6 concepts, events, functions, APIs, and interactive web applications.',
      },

      {
        name: 'React.js',
        level: 85,
        desc: 'Component-based development, Hooks, routing, state management, and dynamic UI creation.',
      },

      {
        name: 'Bootstrap',
        level: 82,
        desc: 'Responsive web design using Bootstrap components, grids, and utilities.',
      },

      {
        name: 'Responsive Web Design',
        level: 90,
        desc: 'Mobile-first development and user-friendly responsive interfaces.',
      },
    ],

    backend: [
      {
        name: 'PHP',
        level: 85,
        desc: 'Backend development, form handling, authentication systems, and dynamic web applications.',
      },

      {
        name: 'MySQL',
        level: 82,
        desc: 'Database creation, SQL queries, joins, CRUD operations, and database management.',
      },

      {
        name: 'Node.js',
        level: 75,
        desc: 'Basic backend APIs, server-side programming, and JavaScript runtime development.',
      },

      {
        name: 'Java',
        level: 80,
        desc: 'Object-oriented programming, Java concepts, and software application development.',
      },

      {
        name: 'REST APIs',
        level: 72,
        desc: 'Understanding API integration, JSON handling, and backend communication.',
      },

      {
        name: 'MongoDB',
        level: 70,
        desc: 'NoSQL database basics, collections, documents, and data handling.',
      },
    ],

    tools: [
      {
        name: 'Git & GitHub',
        level: 88,
        desc: 'Version control, repositories, commits, collaboration, and project management.',
      },

      {
        name: 'VS Code',
        level: 95,
        desc: 'Efficient coding, debugging, extensions, and development environment setup.',
      },

      {
        name: 'Figma',
        level: 75,
        desc: 'Basic UI/UX design, wireframing, and interface prototyping.',
      },

      {
        name: 'Canva',
        level: 85,
        desc: 'Graphic designing, presentations, social media posts, and creative content creation.',
      },

      {
        name: 'Vite',
        level: 80,
        desc: 'Fast React project setup, bundling, and frontend development tooling.',
      },

      {
        name: 'Problem Solving',
        level: 90,
        desc: 'Logical thinking, debugging, coding practice, and analytical skills.',
      },
    ],
  };

  return (
    <section
      id="skills"
      className="section"
      style={{ position: 'relative' }}
    >

      {/* Background Glow */}
      <div
        className="glow-bg glow-secondary"
        style={{ top: '20%' }}
      />

      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>Skills & Technologies</h2>

          <p>
            My technical skills, development tools, and technologies
            that I use to build modern websites and software projects.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="glass"
          style={{
            display: 'flex',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            borderRadius: '50px',
            padding: '0.4rem',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {categories.map((cat) => {

            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  flex: 1,

                  background: isActive
                    ? 'linear-gradient(135deg, var(--primary), var(--secondary))'
                    : 'none',

                  color: isActive
                    ? '#ffffff'
                    : 'var(--text-secondary)',

                  border: 'none',
                  borderRadius: '50px',

                  padding: '0.8rem 1rem',

                  fontSize: '0.95rem',

                  fontFamily: 'Outfit',

                  fontWeight: 600,

                  cursor: 'pointer',

                  transition: 'all 0.3s ease',

                  boxShadow: isActive
                    ? '0 4px 10px var(--primary-glow)'
                    : 'none',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          className="grid-3"
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="glass"
              style={{
                borderRadius: '20px',
                padding: '2rem',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

                transition:
                  'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

                cursor: 'default',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor =
                  'var(--primary)';

                e.currentTarget.style.transform =
                  'translateY(-6px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor =
                  'var(--surface-border)';

                e.currentTarget.style.transform =
                  'translateY(0)';
              }}
            >
              <div>

                {/* Skill Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                    }}
                  >
                    {skill.name}
                  </h3>

                  <span
                    style={{
                      fontFamily: 'Outfit',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      fontSize: '1.05rem',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5',
                    marginBottom: '2rem',
                  }}
                >
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  backgroundColor: 'var(--surface-border)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background:
                      'linear-gradient(to right, var(--primary), var(--secondary))',

                    borderRadius: '10px',

                    transition:
                      'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}