import { ISourceOptions } from '@tsparticles/engine';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useEffect, useMemo, useState } from 'react';

export default function FullParticles({ number = 300 }) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            autoPlay: true,
            background: {
                color: { value: '#030a26' },
            },
            fullScreen: { enable: true, zIndex: -1 },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'repulse',
                    },
                    resize: { enable: true },
                },
            },
            particles: {
                // color: { value: "#94a3b8" },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    outModes: { default: 'bounce' },
                },
                number: { value: number ?? 300, density: { enable: true } },
                opacity: { value: 0.5 },
                shape: { type: 'circle' },
                size: { value: { min: 1, max: 4 } },
                links: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1,
                },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
        }),
        []
    );

    return init ? (
        <Particles
            options={options}
            id="tsParticles"
            className="w-full h-full absolute"
        />
    ) : null;
}
