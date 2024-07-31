import { characterData } from '../../types/character';
import { characterDataAllJson } from '../../types/charactersAllJson';
import { fetchFilterJson } from '../../utils/fetch-filter-json';

export async function getFilterCharacters(
	query: string,
): Promise<characterData[]> {
	const response = await fetchFilterJson<characterDataAllJson>(query);
	const characters = response?.results;
	return characters;
}
