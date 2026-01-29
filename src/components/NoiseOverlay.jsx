import React from 'react';

const NoiseOverlay = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9998,
            opacity: 0.05,
            mixBlendMode: 'overlay',
        }}>
            <svg style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                        numOctaves="3"
                        result="noise"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
};

export default NoiseOverlay;
