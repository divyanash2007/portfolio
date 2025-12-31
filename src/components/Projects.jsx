import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
    {
        title: "Enate",
        description: "Bring your operations into the light",
        color: "#2A2A2A", // Dark card bg
        accent: "#4fd1c5",
        link: "https://enate.io"
    },
    {
        title: "Relo",
        description: "Automate repetitive tasks",
        color: "#2A2A2A",
        accent: "#63b3ed",
        link: "https://relo.io"
    },
    {
        title: "Cornerstone",
        description: "Process orchestration made simple",
        color: "#2A2A2A",
        accent: "#f6ad55",
        link: "https://cornerstone.com"
    },
    {
        title: "TMF Group",
        description: "Global business complexity handled",
        color: "#2A2A2A",
        accent: "#fc8181",
        link: "https://tmf-group.com"
    }
];

const ProjectCard = ({ project, index, range, targetScale }) => {
    return (
        <div
            style={{
                position: 'sticky',
                top: '15vh', // Fixed top position for complete overlay
                height: '500px', // Fixed height for the card look
                width: '100%',
                maxWidth: '1000px',
                marginBottom: '100px', // Spacing between card start points
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                }}
                viewport={{ once: true, amount: 0.1 }}
                style={{
                    backgroundColor: '#161616', // The "Background Box" style
                    borderRadius: '30px',
                    padding: '2rem 3rem',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    border: '1px solid #333',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.5)', // Shadow to separate from card below
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Header Row */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #333',
                    paddingBottom: '1.5rem'
                }}>
                    <h3 style={{
                        fontSize: '2rem',
                        fontWeight: '600',
                        color: '#fff',
                        margin: 0
                    }}>
                        {project.title}
                    </h3>

                    {/* Arrow Icon */}
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </div>

                {/* Content Area (Image Placeholder) */}
                <div style={{
                    flex: 1,
                    backgroundColor: project.color,
                    borderRadius: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* Mock Content Layout */}
                    <div style={{
                        flex: 1,
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        zIndex: 2
                    }}>
                        <h4 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
                            {project.description}
                        </h4>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: project.accent,
                            color: '#000',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            width: 'fit-content'
                        }}>
                            View Case Study
                        </span>
                    </div>

                    {/* Visual geometric visual */}
                    <div style={{
                        position: 'absolute',
                        right: '-10%',
                        bottom: '-20%',
                        width: '400px',
                        height: '400px',
                        background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)`,
                        opacity: 0.2
                    }} />
                </div>

            </motion.div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" style={{
            backgroundColor: '#0f0f0f',
            minHeight: '150vh', // Make it long enough to scroll through cards
            padding: '100px 10% 200px 10%', // Extra bottom padding for last card
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>

            <div style={{ marginBottom: '10vh', textAlign: 'center' }}>
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
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {projects.map((project, i) => {
                    return (
                        <ProjectCard
                            key={i}
                            index={i}
                            project={project}
                        />
                    )
                })}
            </div>

        </section>
    );
};

export default Projects;
