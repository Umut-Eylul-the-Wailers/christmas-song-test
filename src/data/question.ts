// src/data/questions.ts
import { Question } from '../types/types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'How much do you like programming?',
    options: [
      { text: 'Not at all', photo: '/img/1.jpg' },
      { text: 'A little', photo: '/img/1.jpg' },
      { text: 'Quite a bit', photo: '/img/1.jpg' },
      { text: 'I love it!', photo: '/img/1.jpg' },
    ],
    points: [1, 2, 3, 4],
  },
  {
    id: 'q2',
    text: 'How often do you code?',
    options: [
      { text: 'Rarely', photo: '/img/1.jpg' },
      { text: 'Once a week', photo: '/img/1.jpg' },
      { text: 'A few times a week', photo: '/img/1.jpg' },
      { text: 'Every day', photo: '/img/1.jpg' },
    ],
    points: [1, 2, 3, 4],
  },
  // Add more questions as needed
];
