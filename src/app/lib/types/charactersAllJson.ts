import { characterData } from './character';

export type characterDataAllJson = {
	info: {
		count: number;
		pages: number;
		next: string;
	};

	results: characterData[];
};
