import React from 'react';
import { Question } from '../types/types';
import '../styles/App.css'

interface QuestionComponentProps {
  question: Question;
  onAnswer: (questionId: string, selectedOptionIndex: number) => void;
  selectedAnswer?: number;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  onAnswer,
  selectedAnswer,
}) => {
  return (
    <div>
      <h3>{question.text}</h3>
      {question.options.map((option, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="radio"
            id={`${question.id}-${index}`}
            name={question.id}
            className='radioButton'
            value={index}
            checked={selectedAnswer === index}
            onChange={() => onAnswer(question.id, index)}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor={`${question.id}-${index}`} style={{ cursor: 'pointer' }}>
            {option.text}
          </label>
          {option.photo && (
            <img
              src={option.photo}
              alt={option.text}
              style={{ width: '150px', height: '150px', marginLeft: '10px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionComponent;
