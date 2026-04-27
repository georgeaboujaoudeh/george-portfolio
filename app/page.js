'use client';
import dynamic from 'next/dynamic';
import ThemeToggle from './ThemeToggle';
import ParticleBackground from './ParticleBackground';
import Terminal from './Terminal';

const Chart3D = dynamic(() => import('./Chart3D'), { ssr: false });

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', padding: '0 60px', maxWidth: '1200px', margin: '0 auto' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* NAVBAR */}
<nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 0',
        borderBottom: '0.5px solid #1e1e1e'
      }}>
        <span style={{ color: '#f0a500', fontSize: '15px', fontWeight: 500 }}>
          George Abou Jaoude
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['About', 'Stack', 'Experience', 'Projects', 'Terminal', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '14px'
            }}>
              {link}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '100px 0 80px' }}>
        <div style={{
          display: 'inline-block',
          background: '#1a1200',
          border: '0.5px solid #f0a500',
          color: '#f0a500',
          fontSize: '11px',
          padding: '4px 14px',
          borderRadius: '20px',
          marginBottom: '24px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase'
        }}>
          Senior Analytics Engineer
        </div>

        <h1 style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
          Turning data into<br />
          <span style={{ color: '#f0a500' }}>decisions.</span>
        </h1>

        <p style={{ fontSize: '18px', color: '#555', maxWidth: '560px', lineHeight: 1.7, marginBottom: '40px' }}>
          4+ years building BI systems, ETL pipelines, and executive dashboards
          across healthcare and enterprise — from Beirut to the world.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '80px' }}>
          <a href="#experience" style={{
            background: '#f0a500',
            color: '#0a0a0a',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            View Experience
          </a>
          <a href="/George CV - 2026.pdf" download style={{
            background: 'transparent',
            color: '#666',
            border: '0.5px solid #2a2a2a',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            Download CV
          </a>
          <a href="mailto:georgeaboujaoudeh@outlook.com" style={{
            background: 'transparent',
            color: '#666',
            border: '0.5px solid #2a2a2a',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            Contact Me
          </a>
        </div>

        <div style={{ display: 'flex', gap: '48px', marginBottom: '60px' }}>
          {[
            { num: '4+', label: 'Years exp.' },
            { num: '2', label: 'Companies' },
            { num: '3', label: 'Languages' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#f0a500' }}>{stat.num}</div>
              <div style={{ fontSize: '11px', color: '#444', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '11px', color: '#333', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
          Live 3D viz
        </p>
        <Chart3D />
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 0', borderTop: '0.5px solid #1e1e1e' }}>
        <p style={{ fontSize: '11px', color: '#f0a500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>About</p>
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '24px', maxWidth: '640px', lineHeight: 1.2 }}>
          My journey through Analytics.
        </h2>
        <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', lineHeight: 1.8, marginBottom: '16px' }}>
          Analytics Engineer with a background in Business Management, specialized in building scalable 
          data models and decision-focused dashboards.    
        </p>    
        <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', lineHeight: 1.8, marginBottom: '16px' }}>
          I transitioned into data by self-learning SQL and analytics, which led to a BI Developer role 
          at Globemed Group. There, I built ETL pipelines and delivered dashboards across HR, finance, and operations 
          — enabling teams to make faster, data-driven decisions.
        </p>
        <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', lineHeight: 1.8, marginBottom: '16px' }}>
          Currently at Cardinal Health, I design executive-level Looker dashboards and data models focused on patient safety, 
          financial performance, compliance metrics and much more.
        </p>
      </section>

      {/* STACK */}
      <section id="stack" style={{ padding: '80px 0', borderTop: '0.5px solid #1e1e1e' }}>
        <p style={{ fontSize: '11px', color: '#f0a500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Stack</p>
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '40px' }}>Tools of the trade.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
          {[
            { name: 'SQL & PL/SQL', cat: 'Core' },
            { name: 'Looker / LookML', cat: 'BI' },
            { name: 'QlikView / Sense', cat: 'BI' },
            { name: 'Talend', cat: 'ETL' },
            { name: 'BigQuery', cat: 'Cloud' },
            { name: 'Oracle', cat: 'Database' },
            { name: 'Airflow', cat: 'Orchestration' },
            { name: 'Power BI', cat: 'BI' },
            { name: 'Python', cat: 'Language' },
            { name: 'Git', cat: 'DevOps' },
            { name: 'Tableau', cat: 'BI' },
            { name: 'Google Cloud', cat: 'Cloud' },
          ].map(tool => (
            <div key={tool.name} style={{
              background: '#0f0f0f',
              border: '0.5px solid #1e1e1e',
              borderRadius: '12px',
              padding: '20px 16px',
            }}>
              <div style={{ fontSize: '11px', color: '#f0a500', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{tool.cat}</div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#ccc' }}>{tool.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: '80px 0', borderTop: '0.5px solid #1e1e1e' }}>
        <p style={{ fontSize: '11px', color: '#f0a500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Experience</p>
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '48px' }}>Where I've worked.</h2>

        {[
          {
            role: 'Senior Analytics Engineer',
            company: 'Cardinal Health',
            period: 'Nov 2023 – Present',
            bullets: [
              'Built and maintained 8+ executive Looker dashboards tracking patient safety and financial KPIs, used by 1,000+ stakeholders across multiple business units.',
              'Designed scalable data models and advanced LookML implementations, leveraging persistent derived tables (PDTs) and caching to improve dashboard performance and reduce load times by up to 80%.',
              'Optimized complex SQL queries on BigQuery datasets with millions of rows, significantly enhancing query efficiency and overall data pipeline performance.',
              'Partnered with cross-functional teams to translate business requirements into scalable analytics solutions, enabling faster, data-driven decision-making impacting patient safety and operational performance.',
            ]
          },
          {
            role: 'Business Intelligence Developer',
            company: 'Globemed Group',
            period: 'Jun 2022 – Nov 2023',
            bullets: [
              'Developed and maintained Qlik dashboards (including self-service solutions) used by insurance clients to monitor claims across millions of rows, while managing Qlik administration including user roles and access control.',
              'Migrated dashboards from QlikView to QlikSense, improving performance and usability.',
              'Built and optimized Talend ETL pipelines and Oracle (SQL/PLSQL) validation procedures, ensuring reliable and automated data workflows.',
              'Improved Qlik data models and QVD scripts to reduce load times.',
              'Developed an internal HR dashboard (Jira-based) for sprint and team performance tracking.'
            ]
          },
          {
            role: 'Business Analyst Intern',
            company: 'PFC International',
            period: 'Aug 2021 – Dec 2021',
            bullets: [
              'Conducted feasibility and competitive analysis for a dual-concept retail project.',
              'Performed market demand forecasting and CAGR analysis for Qatar\'s residential real estate sector.',
            ]
          },
        ].map((job, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '32px',
            marginBottom: '48px',
            paddingBottom: '48px',
            borderBottom: '0.5px solid #1a1a1a'
          }}>
            <div>
              <div style={{ fontSize: '13px', color: '#444', lineHeight: 1.6 }}>{job.period}</div>
              <div style={{ fontSize: '13px', color: '#f0a500', marginTop: '4px' }}>{job.company}</div>
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>{job.role}</div>
              {job.bullets.map((b, j) => (
                <div key={j} style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ color: '#f0a500', marginTop: '2px', fontSize: '12px' }}>▸</span>
                  <span style={{ fontSize: '14px', color: '#555', lineHeight: 1.7 }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      {/* PROJECTS */}
<section id="projects" style={{ padding: '80px 0', borderTop: '0.5px solid #1e1e1e' }}>
  <p style={{ fontSize: '11px', color: '#f0a500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Projects</p>
  <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '48px' }}>What I've shipped at Cardinal Health:</h2>

  <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
    {[
      {
        title: 'Performance Dashboard — Patient Safety',
        company: 'Cardinal Health',
        description: 'Executive Looker dashboard tracking proactive expiration and recall management across hospital business units. Built with LookML, persistent derived tables and caching for performance at scale.',
        tags: ['Looker', 'LookML', 'SQL', 'BigQuery'],
        image: '/patient_safety_blurred.png',
      },
      {
        title: 'Performance Dashboard — Annual Savings Calculator',
        company: 'Cardinal Health',
        description: 'Financial dashboard quantifying expiration and waste reduction savings across business units. Designed to support executive-level strategic decision making.',
        tags: ['Looker', 'LookML', 'SQL', 'BigQuery'],
        image: '/annual_savings_blurred.png',
      },
      {
        title: 'Performance Dashboard — Financial',
        company: 'Cardinal Health',
        description: 'Inventory availability and reduction opportunities dashboard tracking on-hand cost, par cost, and inventory turns across RFID and bin products.',
        tags: ['Looker', 'LookML', 'SQL', 'BigQuery'],
        image: '/financial_blurred.png',
      },
    ].map((project, i) => (
      <div key={i} style={{
        background: '#0f0f0f',
        border: '0.5px solid #1e1e1e',
        borderRadius: '16px',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', width: '100%', background: '#fff' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <div style={{ padding: '24px 28px' }}>
          <div style={{ fontSize: '11px', color: '#f0a500', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{project.company}</div>
          <div style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>{project.title}</div>
          <div style={{ fontSize: '14px', color: '#555', lineHeight: 1.7, marginBottom: '16px' }}>{project.description}</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                background: '#1a1200',
                border: '0.5px solid #f0a50044',
                color: '#f0a500',
                fontSize: '11px',
                padding: '4px 12px',
                borderRadius: '20px',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      <div id="terminal"><Terminal /></div>
      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 0', borderTop: '0.5px solid #1e1e1e' }}>
        <p style={{ fontSize: '11px', color: '#f0a500', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Contact</p>
        <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>Let's work together.</h2>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '40px' }}>Open to opportunities, collaborations, and interesting problems.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="mailto:georgeaboujaoudeh@outlook.com" style={{
            background: '#f0a500',
            color: '#0a0a0a',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            textDecoration: 'none'
          }}>
            Send Email
          </a>
          <a href="https://www.linkedin.com/in/george-abou-jaoude-7866181b3/" target="_blank" style={{
            background: 'transparent',
            color: '#666',
            border: '0.5px solid #2a2a2a',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '14px',
            textDecoration: 'none'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#666" style={{ marginRight: '8px', verticalAlign: 'middle' }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 0', borderTop: '0.5px solid #1e1e1e', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: '#333' }}>© 2026 George Abou Jaoude</span>
        <span style={{ fontSize: '13px', color: '#333' }}>Beirut, Lebanon</span>
      </footer>
      </div>
    </main>
  );
}