import { en } from './en';
import { he } from './he';
import type { Content } from './types';

export type Lang = 'en' | 'he';

export const content: Record<Lang, Content> = { en, he };
