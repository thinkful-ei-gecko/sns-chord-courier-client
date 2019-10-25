import React from 'react';
import LightNav from '../Nav/LightNav';
import LightHeader from '../Header/LightHeader';
import './about-page.css';

export default function AboutPage() {
  return (
    <>
      <LightNav />
      <section className="about-page">
        <div className="about-image">
          <div className="about-text">
            <LightHeader />
            <h3 className="about-h3">your catalyst for musical inspiration</h3>
            <p className="about-p">
              Chord Courier allows you to explore guitar chords, generating common four chord
               progressions that you can customize from the chord gallery to make your own.
               Use the progression randomizer as a launch point for your songwriting and musical
               discovery.
            </p>
            <h4 className="about-h4">Explore chord by key</h4>
            <p className="about-p">
              Feel free to search through all chords in a given key to build your own progressions.
               Take some time to expand your chord knowledge.
            </p>
            <h4 className="about-h5">Over 250 chords</h4>
            <p className="about-p">
              You will find everything from the basics to chords right at home in jazz,
               rock, pop or indie songs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
