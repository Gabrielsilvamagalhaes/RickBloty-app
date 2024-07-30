import { characterData } from '../../types/character';
import { characterDataAllJson } from '../../types/charactersAllJson';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllCharacters(): Promise<characterData[]> {
	const response = await fetchJson<characterDataAllJson>(
		`${process.env.API_URL}`,
	);
	const characters = response.results;

	return characters;
}
