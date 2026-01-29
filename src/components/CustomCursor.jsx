import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState('default');

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setCursorVariant('hover');
        const handleMouseLeave = () => setCursorVariant('default');

        window.addEventListener('mousemove', moveCursor);

        const attachListeners = () => {
            const hoverables = document.querySelectorAll('a, button, .hover-target');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
            return () => {
                hoverables.forEach(el => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        // Initial attach
        let cleanupListeners = attachListeners();

        // Re-attach listeners when DOM changes (simple observer)
        const observer = new MutationObserver(() => {
            cleanupListeners();
            cleanupListeners = attachListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            cleanupListeners();
            observer.disconnect();
        };
    }, [mouseX, mouseY]);

    const variants = {
        default: {
            height: 32,
            width: 32,
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
        },
        hover: {
            height: 64,
            width: 64,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            mixBlendMode: "difference"
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
        }}>
            {/* Main Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 8,
                    height: 8,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    translateX: useSpring(mouseX, { stiffness: 1500, damping: 100 }), // Less lag for dot - needs slight offset fix logic or direct mouse pos
                    translateY: useSpring(mouseY, { stiffness: 1500, damping: 100 }),
                    marginLeft: 12, // Center inside the ring roughly (32/2 - 8/2 = 12)
                    marginTop: 12
                }}
            />
            {/* Trailing Ring */}
            <motion.div
                variants={variants}
                animate={cursorVariant}
                style={{
                    borderRadius: '50%',
                    translateX: springX,
                    translateY: springY,
                }}
            />
        </div>
    );
};

export default CustomCursor;
