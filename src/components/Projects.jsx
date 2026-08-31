import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Steeze & FORS Platform",
        category: "Full Stack Application",
        subtitle: "Operations & Resource Management Suite",
        description: "A comprehensive operations and management system built with a modern frontend interface and a scalable RESTful backend architecture for real-time task orchestration.",
        accent: "#4fd1c5",
        tags: ["React / Native", "Node.js", "Express", "REST API", "Full Stack"],
        links: [
            { name: "Frontend Repo", url: "https://github.com/divyanash2007/steeze-app" },
            { name: "Backend Repo", url: "https://github.com/divyanash2007/FORS_backend" }
        ]
    },
    {
        title: "VyapaarGuru POS",
        category: "E-Commerce & Retail",
        subtitle: "Point of Sale & Inventory Platform",
        description: "Feature-packed Point of Sale (POS) and inventory management platform designed to streamline retail operations, transaction handling, and stock tracking.",
        accent: "#f6ad55",
        tags: ["React", "Node.js", "Express", "POS System", "Database Architecture"],
        links: [
            { name: "App Repo", url: "https://github.com/divyanash2007/vyapaarguru_app" },
            { name: "Backend Repo", url: "https://github.com/divyanash2007/pos_backend" }
        ]
    },
    {
        title: "CiviSeva Portal",
        category: "Civic Tech & Public Services",
        subtitle: "Citizen Engagement Platform",
        description: "Digital public services platform connecting citizens with local civic authorities for streamlined issue reporting, service tracking, and community welfare.",
        accent: "#63b3ed",
        tags: ["React", "Node.js", "Express", "Civic Tech", "REST APIs"],
        links: [
            { name: "Frontend Repo", url: "https://github.com/divyanash2007/civiseva_front" },
            { name: "Backend Repo", url: "https://github.com/divyanash2007/civiseva" }
        ]
    },
    {
        title: "Sentiment Analysis Engine",
        category: "AI & Data Science",
        subtitle: "Natural Language Processing Classifier",
        description: "Machine Learning model leveraging Natural Language Processing (NLP) techniques to analyze textual sentiment, emotion, and customer feedback patterns.",
        accent: "#b794f4",
        tags: ["Python", "NLP", "Machine Learning", "Scikit-Learn", "Pandas"],
        links: [
            { name: "GitHub Repo", url: "https://github.com/divyanash2007/sentiment_analysis" }
        ]
    },
    {
        title: "Intelligent Spam Classifier",
        category: "Machine Learning & Security",
        subtitle: "Text & Message Filtering Model",
        description: "Predictive machine learning classifier designed to detect and filter spam messages in real-time using natural language classification algorithms.",
        accent: "#fc8181",
        tags: ["Python", "Machine Learning", "Text Classification", "Data Mining"],
        links: [
            { name: "GitHub Repo", url: "https://github.com/divyanash2007/spam_clissifier" }
        ]
    },
    {
        title: "Developer Portfolio",
        category: "Web Engineering & Design",
        subtitle: "Interactive Modern Portfolio",
        description: "Personal developer portfolio engineered with React 19, Framer Motion, Lenis smooth scroll, custom cursor physics, and live API integrations.",
        accent: "#68d391",
        tags: ["React 19", "Vite", "Framer Motion", "Lenis", "Vanilla CSS"],
        links: [
            { name: "GitHub Repo", url: "https://github.com/divyanash2007/portfolio" }
        ]
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <div
            className="project-card-wrapper"
            style={{
                position: 'sticky',
                top: `${12 + index * 1.5}vh`,
                minHeight: '480px',
                width: '100%',
                maxWidth: '1050px',
                marginBottom: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{
                    borderColor: project.accent,
                    boxShadow: `0 -10px 50px ${project.accent}20`,
                    transition: { duration: 0.3 }
                }}
                style={{
                    backgroundColor: '#161616',
                    borderRadius: '28px',
                    padding: '2.5rem 3rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1.8rem',
                    border: '1px solid #333',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.6)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Accent Top Bar */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${project.accent}, transparent)`
                }} />

                {/* Header Row: Category & Index */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #282828',
                    paddingBottom: '1.2rem'
                }}>
                    <span style={{
                        color: project.accent,
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px'
                    }}>
                        {project.category}
                    </span>
                    <span style={{
                        color: '#444',
                        fontSize: '1.2rem',
                        fontWeight: '800',
                        fontFamily: 'monospace'
                    }}>
                        0{index + 1}
                    </span>
                </div>

                {/* Content Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', zIndex: 2 }}>
                    <h3 style={{
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                        fontWeight: '700',
                        color: '#fff',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        {project.title}
                    </h3>

                    <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        color: '#aaa',
                        margin: 0
                    }}>
                        {project.subtitle}
                    </h4>

                    <p style={{
                        fontSize: '1rem',
                        color: '#888',
                        lineHeight: '1.6',
                        margin: '0.5rem 0 0 0',
                        maxWidth: '850px'
                    }}>
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Pills */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    zIndex: 2
                }}>
                    {project.tags.map((tag, tIdx) => (
                        <span
                            key={tIdx}
                            style={{
                                backgroundColor: '#222',
                                color: '#ccc',
                                border: '1px solid #333',
                                borderRadius: '20px',
                                padding: '6px 14px',
                                fontSize: '0.82rem',
                                fontWeight: '500'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links Footer */}
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    paddingTop: '1rem',
                    borderTop: '1px solid #282828',
                    zIndex: 2
                }}>
                    {project.links.map((link, lIdx) => (
                        <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: lIdx === 0 ? project.accent : 'transparent',
                                color: lIdx === 0 ? '#000' : '#fff',
                                border: lIdx === 0 ? `1px solid ${project.accent}` : '1px solid #444',
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Subtle Background Glow */}
                <div style={{
                    position: 'absolute',
                    right: '-10%',
                    bottom: '-20%',
                    width: '350px',
                    height: '350px',
                    background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)`,
                    opacity: 0.08,
                    pointerEvents: 'none'
                }} />
            </motion.div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" style={{
            backgroundColor: '#0f0f0f',
            minHeight: '220vh',
            padding: '100px 8% 180px 8%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{ marginBottom: '8vh', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '800',
                        color: '#fff',
                        textTransform: 'uppercase',
                        letterSpacing: '-2px',
                        margin: 0
                    }}
                >
                    Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ color: '#888', marginTop: '1rem', fontSize: '1.1rem' }}
                >
                    Featured full-stack platforms, machine learning models, and web applications.
                </motion.p>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        index={i}
                        project={project}
                    />
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .project-card-wrapper {
                        position: relative !important;
                        top: auto !important;
                        min-height: auto !important;
                        margin-bottom: 2rem !important;
                    }
                    .project-card-wrapper > div {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;

