'use client'
import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
    phrases: string[],
};

export function Typewriter({ phrases }: TypewriterProps): JSX.Element {

    const [phrase, setPhrase] = useState('');
    const tracker = useRef({ index: 0, phraseIndex: 0, paused: true })

    useEffect(() => {
        const string = setInterval(() => {
                setPhrase(phrases[tracker.current.phraseIndex].slice(0, tracker.current.index))
                
                if (tracker.current.index >= phrases[tracker.current.phraseIndex].length) {
                    if (!tracker.current.paused) {
                        tracker.current.index = 0
                        tracker.current.phraseIndex++
                    };
                    // to fix: ignores timeout after first phrase increment
                    setTimeout(() => {
                        tracker.current.paused = false
                    }, 2000)
                };

                if (tracker.current.phraseIndex >= phrases.length) {
                        tracker.current.phraseIndex = 0
                };
                tracker.current.index++
            }, 100);

        return () => {
            clearInterval(string)
        }
    }, []);

    return (
        <p>
            {phrase}
        </p>
    )
}