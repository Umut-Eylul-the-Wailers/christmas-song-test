// src/components/ResultComponent.tsx
import React from 'react';

interface ResultComponentProps {
  score: number;
  onEnd: () => void;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ score, onEnd }) => {
  
  let resultText = '';
  let resultImage = '';
  let songSrc = ''

  if (score <= 4) {
    resultText = 'You are a beginner!';
    resultImage = '/public/img/1.jpg';     
    //songSrc = '<iframe src="https://open.spotify.com/embed/track/4uu9CHl4b4l6vE5sArH3mT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';

  } else if (score <= 8) {
    resultText = '/img/1.jpg';
    resultImage = '/public/img'; 
    //songSrc = '<iframe src="https://open.spotify.com/embed/track/4uu9CHl4b4l6vE5sArH3mT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';

  } else if (score <= 12) {
    resultText = 'You are quite skilled!';
    resultImage = '/public/img/1.jpg'; 
    //songSrc = '<iframe src="https://open.spotify.com/embed/track/4uu9CHl4b4l6vE5sArH3mT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';

  } else {
    resultText = 'You are an expert!';
    resultImage = '/public/img/1.jpg'; 
    //songSrc = '<iframe src="https://open.spotify.com/embed/track/4uu9CHl4b4l6vE5sArH3mT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';

  }

  return (
    <div>
      <h2>Result: {resultText}</h2>
      <img src={resultImage} alt={resultText} style={{ width: '200px', height: '200px' }} />
      <h3>Your score: {score}</h3>
      <iframe
      style={{ borderRadius: '12px' }}
      src={songSrc}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
></iframe>

      <button onClick={onEnd}>End</button>
    </div>
  );
};

export default ResultComponent;
