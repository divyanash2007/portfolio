import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import me from '../assets/me.png';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Arena", href: "#arena" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '2rem',
            position: 'fixed', // Sticky header
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100, // High z-index for dropdown
            backgroundColor: 'transparent'
        }}>
            {/* Logo / Dropdown Container */}
            <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="logo" style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: '#333',
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 20
                }}>
                    <img src={me} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: '50px', // Just below the logo
                                left: 0,
                                backgroundColor: 'rgba(20, 20, 20, 0.95)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '12px',
                                border: '1px solid #333',
                                padding: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '5px',
                                minWidth: '120px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    style={{
                                        color: '#ccc',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        transition: 'background 0.2s, color 0.2s',
                                        display: 'block'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#333';
                                        e.target.style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = '#ccc';
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <button
                onClick={() => window.location.href = 'mailto:divyanshg6289@gmail.com'}
                style={{
                    background: '#222',
                    border: '1px solid #333',
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.2s'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#333';
                    e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#222';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
