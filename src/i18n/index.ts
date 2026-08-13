import { en } from './en';
import { kh } from './kh';

export const translations = {
  en,
  kh
};

export type Language = keyof typeof translations;
