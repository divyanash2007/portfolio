import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
    {
        title: "Certificate Title",
        issuer: "Issuing Organization",
        date: "Month 2025",
        credential: "#",
        accent: "#4fd1c5",
    },
    {
        title: "Certificate Title",
        issuer: "Issuing Organization",
        date: "Month 2025",
        credential: "#",
        accent: "#63b3ed",
    },
    {
        title: "Certificate Title",
        issuer: "Issuing Organization",
        date: "Month 2025",
        credential: "#",
        accent: "#f6ad55",
    },
    {
        title: "Certificate Title",
        issuer: "Issuing Organization",
        date: "Month 2025",
        credential: "#",
        accent: "#fc8181",
    },
    {
        title: "Certificate Title",
        issuer: "Issuing Organization",
        date: "Month 2025",
        credential: "#",
        accent: "#b794f4",
    },
    {
        title: "Certificate Title",
        issuer: "Issuing Organization",
        date: "Month 2025",
        credential: "#",
        accent: "#68d391",
    },
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
                            gap: '1.2rem',
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

                        {/* Icon placeholder */}
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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M12 8v8" />
                                <path d="M8 12h8" />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontSize: '1.3rem',
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
                                fontSize: '0.95rem',
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

                        {/* Credential Link */}
                        <a
                            href={cert.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: cert.accent,
                                fontSize: '0.9rem',
                                fontWeight: '500',
                                marginTop: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            View Credential
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>

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
