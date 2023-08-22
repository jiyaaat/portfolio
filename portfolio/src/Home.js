import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500); // Delay for 500 milliseconds

    return () => clearTimeout(timer); // Clear the timer on unmount
  }, []);

  return (
    <section id="home" className="home">
      <div className={`content ${showContent ? 'slide-up' : ''}`}>
        <h1>Welcome to My Portfolio</h1>
        <h4>Hi, I am Jiya Thakur, a web developer...</h4>
      </div>
    </section>
  );
}

export default Home;

