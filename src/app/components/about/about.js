'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import './about.css';
import mepic from '../../../media/mepic.jpg';

export default function About() {
    const typewriterRef = useRef(null);

    useEffect(() => {
        // Force animation to run on client-side after mount
        if (typewriterRef.current) {
            // Reset and restart animation
            const element = typewriterRef.current;
            element.style.animation = 'none';
            // Force reflow
            void element.offsetWidth;
            element.style.animation = '';
        }
    }, []);

    return (
      <section id="about" className='home'>
        <div className="photoContainer">
                <Image
                className = 'mepic'
                src = {mepic} alt = "bello"
                priority={false}
                />
            </div>
            <div className = 'intro'>
                <h1 ref={typewriterRef} className = 'head typewriter'> Hello!</h1>
                <p className = 'name'> Im Sophia </p>
                <p className = 'lilintro'> I am a student at UC Berkeley studying Electrical Engineering & Computer Science</p>
            </div>
      </section>
    );
  };
  
