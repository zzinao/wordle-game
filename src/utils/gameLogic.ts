import wordList from './wordList.json';

export enum LetterState {
    Miss,
    Exist,
    Correct,
}

export const getRandomWord = () => {
	const random = Math.floor(Math.random() * wordList.valid.length);
	return wordList.valid[random];
};

export const isVaildWord = (word:string): boolean => {
	return wordList.valid.concat(wordList.valid).includes(word);
};

export function MatchingGuess(guess: string, answer: string): LetterState[] {
	const result: LetterState[] = [];
	const guessArr = guess.split('');
	const answerArr = answer.split('');
	const answerLetterCount: Record<string, number> = {};

	guessArr.forEach((letter, i) => {
		const currentAnswerLetter = answerArr[i];
		if(currentAnswerLetter === letter) {
			result.push(LetterState.Correct);
		}else if(answerArr.includes(letter)) {
			result.push(LetterState.Exist);
		}else {
			result.push(LetterState.Miss);
		}
	});

	result.forEach((current, resultIndex) => {
		if(current !== LetterState.Correct) return;

		const guessLetter = guessArr[resultIndex];

		answerArr.forEach((letter, answerIndex) => {
			if(letter !== guessLetter) return;
			if(result[answerIndex] === LetterState.Correct) {
				result[resultIndex] = LetterState.Miss;
			}
			if(answerLetterCount[guessLetter] <= 0){
				result[resultIndex] = LetterState.Miss;
			}
		});
		answerLetterCount[guessLetter]--;
	});
	return result;
}