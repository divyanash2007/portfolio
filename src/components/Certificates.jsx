import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
    {
        title: "Cisco CCNA 200-301: Complete Guide",
        issuer: "Coursera / Packt",
        date: "Aug 2026",
        credential: "https://coursera.org/verify/specialization/AG5JF510840W",
        fileUrl: "/certificates/Coursera%20AG5JF510840W.pdf",
        accent: "#4fd1c5",
        description: "4-course specialization covering networking fundamentals, Cisco IOS, VLANs, routing, WAN security & network automation.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        )
    },
    {
        title: "Python (Basic) Certification",
        issuer: "HackerRank",
        date: "Sep 2025",
        credential: "https://www.hackerrank.com/certificates/8875F06502A6",
        fileUrl: "/certificates/python_basic%20certificate.pdf",
        accent: "#2EC866",
        description: "Verified skill assessment covering Python core logic, data structures, object-oriented concepts, and algorithm design.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 6 3 6 5V7H14V5C14 4 13 4 13 4H9" />
                <path d="M12 22C16 22 18 21 18 19V17H10V19" />
                <circle cx="9" cy="5" r="1" />
                <circle cx="15" cy="19" r="1" />
            </svg>
        )
    },
    {
        title: "CTF 'EXPLOIT 404' Capture The Flag",
        issuer: "Codemia & LPU",
        date: "Apr 2026",
        credential: "/certificates/WhatsApp%20Image%202026-09-01%20at%2012.19.25%20AM.jpeg",
        accent: "#38B2AC",
        description: "Awarded for participating in the EXPLOIT 404 CTF cybersecurity challenge at Lovely Professional University.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
            </svg>
        )
    },
    {
        title: "Introduction to Cybersecurity Tools",
        issuer: "Codemia & EC-Council",
        date: "2026",
        credential: "/certificates/WhatsApp%20Image%202026-09-01%20at%2012.19.24%20AM%20(1).jpeg",
        accent: "#fc8181",
        description: "Hands-on technical workshop focused on essential security tools, network monitoring, and vulnerability assessment.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        )
    },
    {
        title: "Role of Full Stack in Cybersecurity",
        issuer: "Codemia & DriftX",
        date: "2026",
        credential: "/certificates/WhatsApp%20Image%202026-09-01%20at%2012.19.24%20AM.jpeg",
        accent: "#63b3ed",
        description: "Specialized workshop exploring secure web architecture, API protection strategies, and defensive web engineering.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        )
    },
    {
        title: "Digital Financial Literacy & Fraud Safety",
        issuer: "Astitva Foundation",
        date: "Aug 2026",
        credential: "/certificates/SCAN_20260805_200313056%20(1).pdf",
        accent: "#f6ad55",
        description: "Certified for training and promoting digital financial security and fraud awareness initiatives in India.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        )
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Certificates = () => {
    return (
        <section id="certificates" style={{
            backgroundColor: '#0f0f0f',
            padding: '100px 10%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '80vh',
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
                        margin: 0,
                    }}
                >
                    Certificates
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ color: '#888', marginTop: '1rem', fontSize: '1.1rem' }}
                >
                    Credentials & achievements I've earned along the way.
                </motion.p>
            </div>

            {/* Cards Grid */}
            <motion.div
                className="certificates-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.5rem',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -8,
                            borderColor: cert.accent,
                            boxShadow: `0 8px 30px ${cert.accent}25`,
                            transition: { duration: 0.25 },
                        }}
                        style={{
                            backgroundColor: '#161616',
                            borderRadius: '20px',
                            border: '1px solid #333',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'default',
                        }}
                    >
                        {/* Accent top bar */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: `linear-gradient(90deg, ${cert.accent}, transparent)`,
                        }} />

                        {/* Icon */}
                        <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: '#222',
                            border: '1px solid #333',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: cert.accent,
                        }}>
                            {cert.icon}
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: '#fff',
                            margin: 0,
                            lineHeight: 1.3,
                        }}>
                            {cert.title}
                        </h3>

                        {/* Issuer & Date */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                        }}>
                            <span style={{
                                color: '#aaa',
                                fontSize: '0.9rem',
                                fontWeight: '500'
                            }}>
                                {cert.issuer}
                            </span>
                            <span style={{
                                color: '#666',
                                fontSize: '0.85rem',
                                fontFamily: 'monospace',
                            }}>
                                {cert.date}
                            </span>
                        </div>

                        {/* Description */}
                        <p style={{
                            color: '#777',
                            fontSize: '0.88rem',
                            lineHeight: '1.5',
                            margin: 0
                        }}>
                            {cert.description}
                        </p>

                        {/* Credential Links */}
                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'center',
                            marginTop: 'auto',
                            paddingTop: '0.5rem'
                        }}>
                            <a
                                href={cert.credential}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    color: cert.accent,
                                    fontSize: '0.88rem',
                                    fontWeight: '600',
                                }}
                            >
                                View Credential
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </a>
                            {cert.fileUrl && cert.fileUrl !== cert.credential && (
                                <a
                                    href={cert.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        color: '#888',
                                        fontSize: '0.82rem',
                                        fontWeight: '500',
                                    }}
                                >
                                    📄 Document
                                </a>
                            )}
                        </div>

                        {/* Background radial glow */}
                        <div style={{
                            position: 'absolute',
                            right: '-30px',
                            bottom: '-30px',
                            width: '120px',
                            height: '120px',
                            background: `radial-gradient(circle, ${cert.accent} 0%, transparent 70%)`,
                            opacity: 0.06,
                            pointerEvents: 'none',
                        }} />
                    </motion.div>
                ))}
            </motion.div>

            <style>{`
                @media (max-width: 768px) {
                    .certificates-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Certificates;

