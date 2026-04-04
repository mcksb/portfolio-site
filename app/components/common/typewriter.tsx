'use client'
import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
    phrases: string[],
};

export function Typewriter({ phrases }: TypewriterProps): JSX.Element {

    const [phrase, setPhrase] = useState('');
    const tracker = useRef({ index: 0, phraseIndex: 0, paused: false })

    useEffect(() => {
        const string = setInterval(() => {
                setPhrase(phrases[tracker.current.phraseIndex].slice(0, tracker.current.index))

                if (tracker.current.index >= phrases[tracker.current.phraseIndex].length) {
                    if (!tracker.current.paused) {
                        tracker.current.paused = true
                        setTimeout(() => {
                            tracker.current.index = 0
                            tracker.current.phraseIndex++
                            if (tracker.current.phraseIndex >= phrases.length) {
                                    tracker.current.phraseIndex = 0
                            };
                            tracker.current.paused = false
                        }, 2000)
                    }
                };
                tracker.current.index++
                return
            }, 100);

        return () => {
            clearInterval(string)
        }
    }, []);

    return (
        <p className="min-h-6">
            {phrase}
            <span className='animate-blink'>▋</span>
        </p>
    )
}