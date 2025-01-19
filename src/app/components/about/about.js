import React from 'react';
import Image from 'next/image';
import './about.css';
import mepic from '../../../media/mepic.jpg';

export default function About() {
    return (
      <section id="about" className='home'>
        <div >
                <Image
                className = 'mepic'
                src = {mepic} alt = "bello"
                priority={false}
                />
            </div>
            <div className = 'intro'>
                <h1 className = 'head'> Hello!</h1>
                <p className = 'name'> Im Sophia </p>
                <p className = 'lilintro'> I am a student at UC Berkeley studying Electrical Engineering & Computer Science</p>
            </div>
      </section>
    );
  };
  
