import { characterData } from '../../types/character';
import { fetchJson } from '../../utils/fetch-json';
import { getAllCharacters } from './findAll';

export async function getCharacter(id: string) {
	const character = await fetchJson<characterData>(id);
	return character;
}
export async function fetchCharacterIds(): Promise<number[]> {
	const characters = await getAllCharacters();
	return characters.map((character) => character.id);
}
