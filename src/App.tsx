// src/components/App.tsx
import React, { useState, useEffect } from 'react';
import { Question } from './types/types';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import './styles/App.css' 

// Import questions from the other script
import { questions as externalQuestions } from './data/question'; // Replace with the correct path

const App: React.FC = () => {
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Fetch questions on component mount
  useEffect(() => {
    setQuestions(externalQuestions); // Set questions from the external script
  }, []);

  const handleAnswer = (questionId: string, selectedOptionIndex: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOptionIndex,
    }));
  };

  const handleEnd = () => {
    setIsCompleted(true); // This will trigger the display of the ResultComponent
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        totalScore += q.points[answers[q.id]];
      }
    });
    return totalScore;
  };

  return (
    <div>
      <h1>Point-Buy Test</h1>
      {isCompleted ? (
        <ResultComponent score={calculateScore()} onEnd={() => setIsCompleted(false)} />
      ) : (
        <>
          {questions.length > 0 ? (
            questions.map((question) => (
              <QuestionComponent
                key={question.id}
                question={question}
                onAnswer={handleAnswer}
                selectedAnswer={answers[question.id]}
              />
            ))
          ) : (
            <p>Loading questions...</p>
          )}
          <h2>Your total score: {calculateScore()}</h2>
          <button onClick={handleEnd} className='finishButton'>Finish</button>
        </>
      )}
      <div>
        <iframe src="https://open.spotify.com/embed/track/4uu9CHl4b4l6vE5sArH3mT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>
  );

};

export default App;