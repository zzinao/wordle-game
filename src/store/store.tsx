import create from 'zustand';
import { LetterState } from '../types/type';

interface AnswerState {
  word: string;
  answer: string[];
  pressedAlphabet: (alphabet: string) => void;
  submitAnswer: (word: string) => void;
}

interface Answer {
  letter: string;
  result?: LetterState[];
}

interface StoreState {
  answerArr: Answer[],
}

export const useAnswerStore = create<AnswerState>()((set) => ({
	word: '',
	answer: [],
	pressedAlphabet: (alphabet) =>
		set((state) => ({ answer: [...state.answer, alphabet] })),
	submitAnswer: (word) => set((state) => ({ answer: [...state.answer, word] })),
}));


// export const useStore = create()<StoreState>((set, get) => {
// // addLetter: (letter: string) => {
// //     const answerArr = get().answer.concat({letter})
// //   }
// answerArr: [],
// })

export const useStore = create<StoreState>()((set) => ({
	answerArr: [],
}));