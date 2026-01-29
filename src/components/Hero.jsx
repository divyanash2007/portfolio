import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import me from '../assets/me.png';

import { AnimatePresence } from 'framer-motion';

const Typewriter = ({ texts }) => {
    const [index, setIndex] = React.useState(0);
    const [subIndex, setSubIndex] = React.useState(0);
    const [reverse, setReverse] = React.useState(false);
    const [blink, setBlink] = React.useState(true);

    // Blinking cursor effect
    React.useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    // Typing logic
    React.useEffect(() => {
        // If we finished typing the phrase
        if (subIndex === texts[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, 2000); // Wait 2s before deleting
            return () => clearTimeout(timeout);
        }

        // If we finished deleting
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 100 : 50, parseInt(Math.random() * 50)));
        // Typing speed: random jitter for realism. Deleting is faster.

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts]);

    return (
        <span style={{ display: 'inline-block', minHeight: '1.6em' }}>
            {`${texts[index].substring(0, subIndex)}`}
            <motion.span
                animate={{ opacity: blink ? 1 : 0 }}
                transition={{ duration: 0.1 }}
                style={{
                    display: 'inline-block',
                    marginLeft: '2px',
                    width: '2px',
                    height: '1.2em',
                    background: '#666',
                    verticalAlign: 'text-bottom'
                }}
            />
        </span>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);

    return (
        <section id="hero" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column', // Mobile default: stack
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '60px',
            backgroundColor: '#050706' // Matched to image background
        }}>

            {/* Container for Split Layout */}
            <div className="hero-split-container" style={{
                display: 'flex',
                width: '100%',
                maxWidth: '1200px',
                height: '80%',
                alignItems: 'center',
                padding: '0 2rem',
                boxSizing: 'border-box'
            }}>


                {/* Left Block: Text */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    zIndex: 10,
                    position: 'relative', // Needed for absolute button
                    height: '100%' // Ensure full height for positioning
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginBottom: '80px' // Space for the button
                    }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                fontSize: 'clamp(3rem, 8vw, 8rem)',
                                fontWeight: '900',
                                textTransform: 'uppercase',
                                margin: 0,
                                lineHeight: 0.9,
                                color: '#fff',
                                textAlign: 'left',
                                letterSpacing: '-0.02em',
                            }}>
                            Divyansh<br />Garg
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                            style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '1.5rem'
                            }}>
                            <p style={{
                                fontSize: '1.2rem',
                                color: '#888',
                                margin: 0,
                                minHeight: '1.6em',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                                <Typewriter
                                    texts={[
                                        "Building smart solutions with clean code and curiosity",
                                        "Obsessed with learning, driven by building.",
                                        "A curious builder in love with code and clean design.",
                                        "Code with clarity. Build with intent"
                                    ]}
                                />
                            </p>
                        </motion.div>
                    </div>

                    <button
                        onClick={() => window.location.href = 'mailto:divyanshg6289@gmail.com'}
                        className="hero-button"
                        style={{
                            background: 'transparent',
                            border: '1px solid #444',
                            color: '#fff',
                            borderRadius: '50px',
                            padding: '12px 32px',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            // Base styles, positioning handled in CSS
                        }}>
                        Get in touch →
                    </button>
                </div>

                {/* Right Block: Image */}
                <div className="hero-image-container" style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <motion.img
                        src={me}
                        alt="Divyansh Garg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        style={{
                            height: '100%',
                            maxHeight: '600px',
                            objectFit: 'contain',
                            filter: 'grayscale(100%) contrast(1.1)',
                            maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                        }} />
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                    opacity: opacity, // Bind opacity to scroll
                    position: 'absolute',
                    bottom: '30px',
                    width: '30px',
                    height: '50px',
                    border: '2px solid #555',
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    paddingTop: '8px',
                    cursor: 'pointer',
                    zIndex: 5
                }}>
                <div style={{
                    width: '6px',
                    height: '6px',
                    background: '#fff',
                    borderRadius: '50%',
                    animation: 'scroll 1.5s infinite'
                }}></div>
                <style>{`
                @keyframes scroll {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                /* Desktop default for button */
                .hero-button {
                    position: absolute;
                    bottom: 20%;
                    left: 0;
                    margin-top: 0;
                }

                @media (max-width: 768px) {
                    #hero {
                        background-image: url(${me}) !important;
                        background-size: cover !important;
                        background-position: center top !important;
                        background-repeat: no-repeat !important;
                    }
                    
                    /* Overlay for readability */
                    #hero::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to bottom, rgba(5,7,6,0.8), rgba(5,7,6,0.9));
                        z-index: 1;
                    }

                    .hero-split-container {
                        flex-direction: column !important; /* Stack normally, text on top */
                        text-align: center;
                        z-index: 2; /* Sit on top of overlay */
                        justify-content: center !important;
                        align-items: center !important;
                        height: 100% !important;
                    }

                    .hero-split-container > div {
                        width: 100%;
                        align-items: center !important; /* Center text */
                        margin-bottom: 0 !important;
                    }

                    .hero-image-container {
                        display: none !important; /* Hide actual image element */
                    }
                    
                    /* Button mobile style */
                     .hero-button {
                        position: relative !important;
                        bottom: auto !important;
                        left: auto !important;
                        margin-top: 2rem !important;
                     }
                     
                     .hero-split-container h1 {
                         font-size: 15vw !important;
                         text-align: center !important;
                     }
                }
            `}</style>
            </motion.div>

        </section>
    );
};

export default Hero;
