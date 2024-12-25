// src/types/types.ts

export interface Option {
  text: string;
  photo: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];  // Update this to use the Option type
  points: number[];
}
