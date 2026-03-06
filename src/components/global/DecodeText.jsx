import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:<>?';

const DecodeText = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let iterations = 0;
        const maxIterations = 20; // How many times it scramble before locking
        const intervalDuration = 40; // Total duration roughly 800ms

        const interval = setInterval(() => {
            setDisplayText((prev) => {
                return text
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';

                        // Gradually lock in characters from left to right
                        if (index < (iterations / maxIterations) * text.length) {
                            return text[index];
                        }

                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    })
                    .join('');
            });

            iterations++;

            if (iterations >= maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
            }
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [text, isInView]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            {/* Blinking cursor while decoding */}
            {!isInView && <span className="opacity-0">_</span>}
        </span>
    );
};

export default DecodeText;
