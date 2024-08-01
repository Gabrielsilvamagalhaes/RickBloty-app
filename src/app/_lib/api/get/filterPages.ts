import { characterData } from '../../types/character';
import { characterDataAllJson } from '../../types/charactersAllJson';
import { fetchFilterJson } from '../../utils/fetch-filter-json';

export async function getFilterPages(query: string): Promise<number> {
	const response = await fetchFilterJson<characterDataAllJson>(query);
	const pages = response?.info?.pages;
	return pages;
}
