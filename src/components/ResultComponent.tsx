// src/components/ResultComponent.tsx
import React from 'react';

interface ResultComponentProps {
  score: number;
  onEnd: () => void;
}

const ResultComponent: React.FC<ResultComponentProps> = ({ score, onEnd }) => {
  // Define result based on score
  let resultText = '';
  let resultImage = '';
  let songSrc = ''

  if (score <= 4) {
    resultText = 'You are a beginner!';
    resultImage = '/public'; // Replace with your image
  } else if (score <= 8) {
    resultText = 'You have some experience!';
    resultImage = '/img'; // Replace with your image
  } else if (score <= 12) {
    resultText = 'You are quite skilled!';
    resultImage = '/images/skilled.jpg'; // Replace with your image
  } else {
    resultText = 'You are an expert!';
    resultImage = '/images/expert.jpg'; // Replace with your image
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
