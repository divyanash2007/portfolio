import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue, useInView } from 'framer-motion';

// --- Components ---

/**
 * Animated counter that counts up from 0 to 'to' value when in view.
 */
const CountUp = ({ to, prefix = '', suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 20, stiffness: 100 });
    const rounded = useTransform(springValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });
    }, [rounded]);

    return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};

/**
 * Custom pixel grid that displays GitHub contribution data.
 * Pure presentational component.
 */
const GitHubGrid = React.memo(({ data }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: 'repeat(7, 1fr)',
            gridAutoFlow: 'column', // Fill by column (weeks)
            gap: '2px', // Tighter gap for one year view
            marginTop: '15px',
            width: '100%',
            height: '100px', // Fixed height for consistency
            overflow: 'hidden' // Hide overflow if any
        }}>
            {data.length > 0 ? (
                data.map((day, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.002 }} // Faster stagger
                        style={{
                            width: '100%',
                            height: '100%',
                            // User request: "non-commits must be with black", "commits must be grey"
                            backgroundColor: day.contributionCount === 0 ? '#101010' : '#808080',
                            borderRadius: '1px',
                            // Add opacity variance for "intensity" if it's an active day
                            opacity: day.contributionCount === 0 ? 0.3 : (0.4 + (day.intensity / 5) * 0.6)
                        }}
                        title={`${day.date}: ${day.contributionCount} contributions`}
                    />
                ))
            ) : (
                // Skeleton loading: 52 weeks * 7 days
                Array.from({ length: 364 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: '#161616',
                            borderRadius: '1px'
                        }}
                    />
                ))
            )}
        </div>
    );
});

// --- Data ---
const initialArenaItems = [
    {
        id: 'github',
        name: 'GitHub',
        tag: 'Open Source',
        color: '#ffffff',
        link: 'https://github.com/divyanash2007',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        ),
        subtitle: "Loading contributions...", // Placeholder
        stat: "Fetching stats...",
        renderVisual: (data) => <GitHubGrid data={data || []} />
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        tag: 'Professional',
        color: '#0077b5',
        link: 'https://www.linkedin.com/in/divyansh-garg-30770a230/',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 0 0 0-2-2 2 0 0 0-2 2v7h-4v-7a6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        ),
        subtitle: "Connect on LinkedIn",
        stat: "Join my network",
        renderVisual: () => (
            <svg viewBox="0 0 100 20" style={{ width: '80%', marginTop: '15px', stroke: '#0077b5', fill: 'none', strokeWidth: 2 }}>
                <motion.path
                    d="M0,10 Q25,20 50,10 T100,10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>
        )
    },
    {
        id: 'leetcode',
        name: 'LeetCode',
        tag: 'Problem Solving',
        color: '#FFA116',
        link: 'https://leetcode.com/u/dvyansh_garg_2007/',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.203.038l-4.277-4.193a3.02 3.02 0 0 1-.674-.943 2.9 2.9 0 0 1-.055-2.292 3.16 3.16 0 0 1 .416-.863l3.853-4.126L14.77 2.45c.54-.54.54-1.414.004-1.955A1.378 1.378 0 0 0 13.483 0zm1.782 9.073a1.375 1.375 0 0 0-.58 2.503L18.775 13.5l-4.089 1.924a1.375 1.375 0 1 0 1.161 2.468L20.895 15.5c.77-.362 1.205-1.205 1.066-2.029a1.764 1.764 0 0 0-.256-.723c-.362-.633-.997-.905-1.62-.647L15.265 9.073z" />
            </svg>
        ),
        subtitle: "Fetching ranking...",
        stat: "Loading stats...",
        renderVisual: () => (
            <div style={{ fontFamily: 'monospace', color: '#38A169', marginTop: '10px', fontSize: '0.9rem' }}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >_</motion.span>
            </div>
        )
    },
    {
        id: 'geeksforgeeks',
        name: 'GeeksforGeeks',
        tag: 'Learning',
        color: '#2F8D46',
        link: 'https://auth.geeksforgeeks.org/user/divyansh',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
        ),
        subtitle: "Compiling success stories...",
        stat: "Dashboard in progress ⚡",
        renderVisual: () => (
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ width: '20px', height: '20px', border: '2px solid #2F8D46', borderTopColor: 'transparent', borderRadius: '50%', marginTop: '10px' }}
            />
        )
    },
    {
        id: 'hackerrank',
        name: 'HackerRank',
        tag: 'Competitive',
        color: '#2EC866',
        link: 'https://www.hackerrank.com/profile/divyanshg6289',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12L7 2L12 12L17 2L22 12" /> {/* Abstract visual for now, or use a specific path if preferred */}
                <path d="M5.5 22h13" />
            </svg>
        ),
        subtitle: "Analyzing profile...",
        stat: "Loading stats...",
        renderVisual: () => (
            <div style={{
                width: '100%',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                marginTop: '10px'
            }}>
                {[1, 2, 3, 4, 5].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [10, 30, 10] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        style={{ width: '6px', background: '#2EC866', borderRadius: '4px' }}
                    />
                ))}
            </div>
        )
    }
];

const Arena = () => {
    const [hovered, setHovered] = useState(null);
    const [items, setItems] = useState(initialArenaItems);

    useEffect(() => {
        // --- Fetch GitHub Data ---
        const fetchGitHub = async () => {
            try {
                const res = await fetch('https://github-contributions-api.deno.dev/divyanash2007.json');
                const data = await res.json();
                if (data && data.totalContributions !== undefined) {

                    let recentContributions = [];
                    if (data.contributions) {
                        // Flatten to get all days, then take the last 364 days (52 weeks * 7 days)
                        const allDays = data.contributions.flat();
                        recentContributions = allDays.slice(-364);
                    }

                    setItems(prev => prev.map(item => {
                        if (item.id === 'github') {
                            return {
                                ...item,
                                subtitle: <CountUp to={data.totalContributions} suffix=" Contributions made this year" />,
                                stat: <CountUp to={data.totalContributions} suffix=" Total contributions made" />,
                                // Pass the fetched data to the visual renderer
                                renderVisual: () => <GitHubGrid data={recentContributions} />
                            };
                        }
                        return item;
                    }));
                }
            } catch (err) {
                console.error("GitHub fetch error:", err);
            }
        };

        // --- Fetch LeetCode Data ---
        const fetchLeetCode = async () => {
            try {
                const res = await fetch('https://leetcode-stats-api.herokuapp.com/dvyansh_garg_2007');
                const data = await res.json();
                if (data.status === 'success') {
                    setItems(prev => prev.map(item => {
                        if (item.id === 'leetcode') {
                            // Format: "E: 10 | M: 20 | H: 5"
                            const breakdown = (
                                <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                                    E:<CountUp to={data.easySolved} /> M:<CountUp to={data.mediumSolved} /> H:<CountUp to={data.hardSolved} />
                                </span>
                            );

                            return {
                                ...item,
                                subtitle: <>Global Ranking: <CountUp to={Number(data.ranking)} /></>,
                                stat: <>Solved: <CountUp to={data.totalSolved} /> | {breakdown}</>,
                            };
                        }
                        return item;
                    }));
                }
            } catch (err) {
                console.error("LeetCode fetch error:", err);
            }
        };

        fetchGitHub();
        fetchLeetCode();

        // --- Fetch HackerRank Data ---
        const fetchHackerRank = async () => {
            try {
                // Using CORS proxy to get the profile data
                const res = await fetch('https://corsproxy.io/?https://www.hackerrank.com/rest/contests/master/hackers/divyanshg6289/profile');
                const data = await res.json();
                if (data && data.model) {
                    const { created_at, level, title } = data.model;

                    // Format Date: "Joined Aug 2025"
                    const date = new Date(created_at);
                    const joined = `Joined ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

                    // Clean Title (remove HTML tags like <sup>)
                    const cleanTitle = title.replace(/<[^>]*>/g, '');

                    setItems(prev => prev.map(item => {
                        if (item.id === 'hackerrank') {
                            return {
                                ...item,
                                subtitle: `${cleanTitle} (Level ${level})`,
                                stat: joined,
                                renderVisual: () => (
                                    <div style={{ marginTop: '10px', fontSize: '2rem', fontWeight: 'bold', color: '#2EC866' }}>
                                        {level}
                                        <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '5px' }}>stars</span>
                                    </div>
                                )
                            };
                        }
                        return item;
                    }));
                }
            } catch (err) {
                console.error("HackerRank fetch error:", err);
            }
        };
        fetchHackerRank();

    }, []);

    return (
        <section id="arena" style={{
            backgroundColor: '#0f0f0f',
            padding: '100px 5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh', // Significant height
            position: 'relative',
            overflow: 'hidden'
        }}>
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
                    Arena
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ color: '#888', marginTop: '1rem', fontSize: '1.1rem' }}
                >
                    My digital footprint across various platforms.
                </motion.p>
            </div>

            <div
                className="arena-container"
                style={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '1000px',
                    height: '400px',
                    gap: '10px'
                }}>
                {items.map((item) => {
                    const isHovered = hovered === item.id;
                    const isDimmed = hovered !== null && !isHovered;

                    return (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arena-card"
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                            layout // Enable layout animation
                            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                            style={{
                                flex: isHovered ? 3 : 1, // Expand hovered item
                                backgroundColor: '#161616',
                                borderRadius: '20px',
                                border: '1px solid #333',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden', // Contain the graph/visuals
                                cursor: 'pointer',
                                textDecoration: 'none',
                                opacity: isDimmed ? 0.3 : 1, // Dim others
                                boxShadow: isHovered ? `0 0 30px ${item.color}40` : 'none', // Glow
                                borderColor: isHovered ? item.color : '#333'
                            }}
                        >
                            {/* Icon - Always visible */}
                            <motion.div
                                layout="position"
                                className="arena-icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    color: isHovered ? item.color : '#fff',
                                    marginBottom: isHovered ? '20px' : '0'
                                }}
                            >
                                {item.icon}
                            </motion.div>

                            {/* Content - Revealed on hover */}
                            <motion.div
                                className="arena-content"
                                style={{
                                    opacity: isHovered ? 1 : 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '100%',
                                    position: isHovered ? 'relative' : 'absolute',
                                    bottom: isHovered ? 'auto' : '-50px',
                                    padding: '0 1rem'
                                }}
                            >
                                <h3 style={{
                                    color: '#fff',
                                    margin: 0,
                                    fontSize: '1.5rem',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {item.name}
                                </h3>

                                <span style={{
                                    color: '#ccc',
                                    fontSize: '0.9rem',
                                    marginTop: '0.5rem',
                                    display: 'block' // Ensure animations trigger layout
                                }}>
                                    {item.subtitle}
                                </span>

                                <span style={{
                                    color: '#888',
                                    fontSize: '0.8rem',
                                    marginTop: '0.2rem',
                                    display: 'block'
                                }}>
                                    {item.stat}
                                </span>

                                {/* Custom Visual */}
                                {item.renderVisual && item.renderVisual()}

                            </motion.div>

                            {/* Background decoration */}
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.1 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: `linear-gradient(to bottom, ${item.color}, transparent)`,
                                        zIndex: 0
                                    }}
                                />
                            )}

                        </motion.a>
                    );
                })}


            </div>

            {/* Mobile query for stacking */}
            <style>{`
                @media (max-width: 755px) {
                    .arena-container {
                        display: grid !important;
                        grid-template-columns: 1fr 1fr;
                        height: auto !important;
                        gap: 15px !important;
                    }
                    .arena-card {
                        width: 100% !important;
                        min-height: 220px !important;
                        flex: none !important;
                    }
                    .arena-card:last-child {
                        grid-column: 1 / -1;
                    }
                    
                    /* Force visible content */
                    .arena-content {
                        opacity: 1 !important;
                        position: relative !important;
                        bottom: auto !important;
                    }
                    .arena-icon {
                        margin-bottom: 20px !important;
                        color: #fff !important; /* Default to white since we can't easily grab specific color in CSS */
                    }
                }
            `}</style>
        </section>
    );
};

export default Arena;
