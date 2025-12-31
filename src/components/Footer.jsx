import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/divyanash2007",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            )
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/divyansh-garg-30770a230/",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 0 0 0-2-2 2 0 0 0-2 2v7h-4v-7a6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            )
        },
        {
            name: "Email",
            href: "mailto:divyanshg6289@gmail.com",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            )
        }
    ];

    return (
        <footer
            id="contact"
            style={{
                backgroundColor: '#0a0a0a',
                padding: '80px 10% 40px 10%',
                borderTop: '1px solid #222',
                color: '#fff',
                fontSize: '0.9rem'
            }}
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '60px',
                marginBottom: '60px'
            }}>
                {/* Brand / CTA Section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>Let's Connect</h3>
                    <p style={{ color: '#888', lineHeight: '1.6' }}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <a
                        href="mailto:divyanshg6289@gmail.com"
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#fff',
                            color: '#000',
                            padding: '12px 24px',
                            borderRadius: '50px',
                            fontWeight: '600',
                            textAlign: 'center',
                            width: 'fit-content',
                            marginTop: '10px'
                        }}
                    >
                        Say Hello 👋
                    </a>
                </div>

                {/* Socials */}
                <div style={{ justifySelf: 'end', textAlign: 'right' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>Follow Me</h4>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: '#fff' }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '45px',
                                    height: '45px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1a1a1a',
                                    color: '#ccc',
                                    border: '1px solid #333'
                                }}
                            >
                                <div style={{ width: '20px', height: '20px' }}>
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                borderTop: '1px solid #222',
                paddingTop: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                color: '#666'
            }}>
                <p style={{ margin: 0 }}>© 2025 Divyansh Garg. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
