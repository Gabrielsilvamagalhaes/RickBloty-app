import { characterData } from '../../types/character';

export async function getData(): Promise<characterData> {
	const response = await fetch('https://rickandmortyapi.com/api/character/1');
	if (response.ok) {
		const { id, name, status, species, gender, image, episode } =
			await response.json();

		return { id, name, status, species, gender, image, episode };
	}
	throw new Error('Failed to fetch data');
}
