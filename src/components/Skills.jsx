import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        name: "React",
        rotation: -5,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#61DAFB" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" stroke="#61DAFB" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" stroke="#61DAFB" strokeWidth="1.5" /></svg>
    },
    {
        name: "Python",
        rotation: 8,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8 2 6 3 6 5V7H14V5C14 4 13 4 13 4H9C9 4 8 4 8 5" stroke="#FFE873" strokeWidth="1.5" strokeLinecap="round" /><path d="M16 22H8C6 22 5 21 5 19V17H12" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round" /><path d="M12 22C16 22 18 21 18 19V17H10V19C10 20 11 20 11 20H15C15 20 16 20 16 19" stroke="#3776AB" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 2H16C18 2 19 3 19 5V7H12" stroke="#FFE873" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9.5" cy="5.5" r="0.5" fill="#fff" /><circle cx="14.5" cy="18.5" r="0.5" fill="#fff" /></svg>
    },
    {
        name: "C++",
        rotation: -3,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="#00599C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 11C9 10 9.5 9.5 10 9.5M9 11C9 12 9.5 12.5 10 12.5M16 9.5V12.5M14.5 11H17.5M19 11H22M20.5 9.5V12.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
    },
    {
        name: "JavaScript",
        rotation: 6,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#F7DF1E" strokeWidth="1.5" /><path d="M11 16V13M16 16V14C16 13 15.5 13 15.5 13C14.5 13 14.5 14 14.5 14V16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    },
    {
        name: "HTML",
        rotation: -7,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" stroke="#E34F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 7H8L9 15L12 16L15 15L15.5 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    },
    {
        name: "CSS",
        rotation: 4,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3L5.5 19L12 21L18.5 19L20 3H4Z" stroke="#1572B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 7H8L9 15L12 16L15 15L15.5 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    },
    {
        name: "Tailwind CSS",
        rotation: -9,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 12 7 15 10 12C13 9 16 15 16 15C16 15 19 18 22 15M2 9C2 9 5 12 8 9C11 6 14 12 14 12C14 12 17 15 20 12" stroke="#38B2AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    },
    {
        name: "NumPy",
        rotation: 12,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#013243" strokeWidth="1.5" /><path d="M8 8L16 16M16 8L8 16" stroke="#4D77CF" strokeWidth="1.5" strokeLinecap="round" /></svg>
    },
    {
        name: "Pandas",
        rotation: -6,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#150458" strokeWidth="1.5" /><rect x="8" y="8" width="2" height="8" fill="#FFCA00" /><rect x="12" y="8" width="2" height="8" fill="#E70488" /><rect x="16" y="8" width="2" height="8" fill="#150458" /></svg>
    },
    {
        name: "Git",
        rotation: 10,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#F05032" strokeWidth="1.5" /><circle cx="8" cy="12" r="2" stroke="#fff" strokeWidth="1.5" /><circle cx="16" cy="8" r="2" stroke="#fff" strokeWidth="1.5" /><path d="M8 14V17M16 10V17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
    },
    {
        name: "Linux",
        rotation: -4,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C12 3 6 5 6 12C6 19 8 21 12 21C16 21 18 19 18 12C18 5 12 3 12 3Z" stroke="#FCC624" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 12H16" stroke="#fff" strokeWidth="1.5" /><path d="M11 9H13M10 15H14" stroke="#fff" strokeWidth="1.5" /></svg>
    },
    {
        name: "VS Code",
        rotation: 5,
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L20 12L4 20V4Z" stroke="#007ACC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 6L9 18M15 18L8 6" stroke="#fff" strokeWidth="1.5" opacity="0.5" /></svg>
    }
];

const Skills = () => {
    // Parent container variants matching About.jsx
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger icons
                delayChildren: 0.1
            }
        }
    };

    return (
        <section style={{
            backgroundColor: '#0f0f0f',
            padding: '80px 10%',
            display: 'flex',
            flexDirection: 'column', // Changed to column
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            {/* Section Title */}
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
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
                    Tech Stack
                </motion.h2>
            </div>
            {/* Background Box converted to motion.div */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Trigger earlier on mobile
                className="skills-container"
                style={{
                    backgroundColor: '#161616',
                    borderRadius: '30px',
                    padding: '4rem',
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '4rem',
                    flexWrap: 'wrap',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >

                {/* Left: Headline Text */}
                <div className="skills-text" style={{ flex: '1 1 300px' }}>
                    <motion.h2
                        variants={{ // Child variant
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                        }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '700',
                            color: '#fff',
                            lineHeight: '1.2'
                        }}
                    >
                        I work with the likes of:
                    </motion.h2>
                </div>

                {/* Right: Scrambled Icons */}
                <div className="skills-icons" style={{
                    flex: '1.5 1 400px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    padding: '1rem'
                }}>
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            // Custom variant for scrambled look + staggered entrance
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, rotate: 0 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: skill.rotation,
                                    transition: { type: "spring", stiffness: 200 }
                                }
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 0,
                                zIndex: 10,
                                transition: { duration: 0.2 }
                            }}
                            style={{
                                backgroundColor: '#222',
                                borderRadius: '16px',
                                padding: '1rem',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                                border: '1px solid #333'
                            }}
                        >
                            <div style={{ width: '100%', height: '100%' }}>
                                {React.cloneElement(skill.icon, {
                                    style: { width: '100%', height: '100%' }
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    .skills-container {
                        flex-direction: column !important;
                        padding: 2rem !important;
                        gap: 2rem !important;
                        align-items: center !important;
                    }
                    .skills-text {
                        flex: auto !important;
                        width: 100% !important;
                        text-align: center !important;
                    }
                    .skills-icons {
                        flex: auto !important;
                        width: 100% !important;
                        padding: 0 !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Skills;
