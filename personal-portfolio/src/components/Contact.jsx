import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Yagnik-Tank',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
    },

    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yagnik-tank2111/',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please enter your message.';
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ position: 'relative' }}
    >
      <div
        className="glow-bg glow-primary"
        style={{ bottom: '-15%', right: '-5%' }}
      />

      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>Get In Touch</h2>

          <p>
            Interested in working together, collaborating on projects,
            or discussing software development opportunities? Feel free
            to contact me.
          </p>
        </div>

        <div className="grid-2">

          {/* Left Side */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                }}
              >
                Let's build something
                <br />

                <span
                  style={{
                    background:
                      'linear-gradient(135deg, var(--primary), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  innovative together
                </span>
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                }}
              >
                I am a passionate B.Tech CSE student and aspiring Software
                Engineer who loves building modern websites, web applications,
                and creative digital solutions.
              </p>
            </div>

            {/* Contact Cards */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
              }}
            >
              {/* Email Card */}
              <div
                className="glass"
                style={{
                  borderRadius: '16px',
                  padding: '1.2rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                }}
              >
                <div style={{ color: 'var(--primary)' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    ></rect>

                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}
                  >
                    Email Me
                  </p>

                  <a
                    href="mailto:tankyagnik12@gmail.com"
                    style={{
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                    }}
                  >
                    tankyagnik12@gmail.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div
                className="glass"
                style={{
                  borderRadius: '16px',
                  padding: '1.2rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                }}
              >
                <div style={{ color: 'var(--primary)' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>

                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                    }}
                  >
                    Current Location
                  </p>

                  <p
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    Rajkot, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                }}
              >
                Connect With Me
              </h4>

              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass"
                    aria-label={social.name}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor =
                        'var(--surface-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div style={{ position: 'relative' }}>
            {status === 'success' ? (
              <div
                className="glass"
                style={{
                  borderRadius: '24px',
                  padding: '3rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  minHeight: '400px',
                }}
              >
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-glow)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  ✓
                </div>

                <h3
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    marginBottom: '0.8rem',
                  }}
                >
                  Message Sent Successfully!
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    maxWidth: '300px',
                    marginBottom: '2rem',
                  }}
                >
                  Thank you for contacting me. I will get back to you soon.
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="glass"
                onSubmit={handleSubmit}
                style={{
                  borderRadius: '24px',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="name">Your Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    disabled={status === 'sending'}
                  />

                  {errors.name && (
                    <span style={{ color: '#ef4444' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email">Your Email</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    disabled={status === 'sending'}
                  />

                  {errors.email && (
                    <span style={{ color: '#ef4444' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message">Your Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message..."
                    disabled={status === 'sending'}
                  />

                  {errors.message && (
                    <span style={{ color: '#ef4444' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary"
                >
                  {status === 'sending'
                    ? 'Sending...'
                    : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}