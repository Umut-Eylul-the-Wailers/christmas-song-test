// src/data/questions.ts

import { Question } from '../types/types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'How much do you like programming?',
    options: [
      { text: 'Not at all', photo: './img/1.jpg' },
      { text: 'A little', photo: '/images/little_programming.jpg' },
      { text: 'Quite a bit', photo: '/images/quite_programming.jpg' },
      { text: 'I love it!', photo: '/images/love_programming.jpg' },
    ],
    points: [1, 2, 3, 4],
  },
  {
    id: 'q2',
    text: 'How often do you code?',
    options: [
      { text: 'Rarely', photo: '/images/rarely_code.jpg' },
      { text: 'Once a week', photo: '/images/once_a_week.jpg' },
      { text: 'A few times a week', photo: '/images/a_few_times.jpg' },
      { text: 'Every day', photo: '/images/every_day.jpg' },
    ],
    points: [1, 2, 3, 4],
  },
  // Add more questions as needed
];
