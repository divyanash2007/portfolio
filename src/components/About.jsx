import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [headlineIndex, setHeadlineIndex] = React.useState(0);
    const aboutPhrases = [
        "Strong problem-solving skills with a logical and structured approach",
        "Quick learner who adapts easily to new technologies and tools",
        "Curious mindset with a strong interest in AI and modern development",
        "Solid foundation in programming with a focus on clean, readable code"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setHeadlineIndex((prev) => (prev + 1) % aboutPhrases.length);
        }, 4000); // Cycle every 4 seconds
        return () => clearInterval(interval);
    }, [aboutPhrases.length]);
    // Split bio into logical lines/sentences
    const bioLines = [
        "I’m a computer science student who developed an interest in technology through hands-on experimentation and independent learning from an early stage. Over time, this approach helped me build a practical understanding of how software systems work beyond theory. I focus on developing strong fundamentals, staying consistent in my efforts, and building skills that grow more valuable with real-world experience."
    ];

    // Variants for the PARENT container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger each child by 0.2s
                delayChildren: 0.1
            }
        }
    };

    // Variants for the LINES (Left side)
    const lineVariants = {
        hidden: { opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Variant for the RIGHT side headline (Waiting for all lines)
    // We achieve the wait by purely relying on the stagger accumulation if this is the LAST child.
    // However, the requested delay is LONG (after all lines).
    // Better way: Specific variant with custom delay for this item.
    const headlineVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: bioLines.length * 0.2 + 0.2 // Hard delay relative to container start
            }
        }
    };

    return (
        <section id="about" style={{
            backgroundColor: '#0f0f0f',
            display: 'flex',
            flexDirection: 'column', // Changed to column for title stacking
            justifyContent: 'center',
            alignItems: 'center',
            padding: '80px 10%',
            minHeight: '100vh',
            overflow: 'hidden'
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
                    About Me
                </motion.h2>
            </div>

            {/* 
               Master Motion Container 
               Controls the "hidden" / "visible" state for EVERYTHING inside.
               This ensures connection: if this is visible, children animate.
               If it leaves view, "hidden" is reapplied to ALL children.
            */}
            {/* 
               Master Motion Container 
               Controls the "hidden" / "visible" state for EVERYTHING inside.
               This ensures connection: if this is visible, children animate.
               If it leaves view, "hidden" is reapplied to ALL children.
            */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // Trigger earlier on mobile
                className="about-container"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    maxWidth: '1200px',
                    gap: '4rem',
                    alignItems: 'center',
                    flexWrap: 'wrap-reverse',
                    backgroundColor: '#161616', // Background box
                    padding: '4rem', // Inner spacing
                    borderRadius: '30px', // Soft rounded corners
                    position: 'relative'
                }}
            >

                {/* Left Side: Roll-in Lines */}
                <div
                    className="about-column"
                    style={{
                        flex: 1,
                        minWidth: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                    {bioLines.map((line, index) => (
                        <motion.p
                            key={index}
                            variants={lineVariants} // Inherits "hidden"/"visible"
                            style={{
                                fontSize: '1.25rem',
                                lineHeight: '1.6',
                                color: '#ccc',
                                margin: 0
                            }}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                {/* Right Side: Headline Fade from Left */}
                <div
                    className="about-column"
                    style={{
                        flex: 1,
                        minWidth: '300px',
                        minHeight: '200px', // Fixed height to prevent jump
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={headlineIndex}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)', // Slightly smaller for long phrases
                                fontWeight: '700',
                                color: '#fff',
                                lineHeight: '1.2',
                                margin: 0
                            }}
                        >
                            {aboutPhrases[headlineIndex]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

            </motion.div>

            <style>{`
        @media (max-width: 768px) {
            .about-container {
                flex-direction: column-reverse !important;
                gap: 2rem !important;
                padding: 2rem !important; /* Reduce padding on mobile */
            }
            .about-column {
                min-width: 100% !important; /* Allow full width, prevent overflow */
                text-align: center; /* Center text on mobile often looks better, or left if preferred */
            }
             /* Ensure bio text left align usually reads better */
            .about-column p {
                 text-align: left;
            }
             /* Headline can be centered or left */
            .about-column h2 {
                 text-align: center;
            }
        }
      `}</style>
        </section>
    );
};

export default About;
