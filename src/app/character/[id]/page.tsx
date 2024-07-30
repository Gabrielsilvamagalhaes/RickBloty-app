import { fetchCharacterIds, getCharacter } from '@/app/_lib/api/get/findById';

export async function generateStaticParams() {
	const characterIds = await fetchCharacterIds();
	return characterIds.map((id) => ({ id: id.toString() }));
}

export default async function CharacterPage({
	params,
}: { params: { id: string } }) {
	const { id } = params;
	const character = await getCharacter(id);
	return (
		<>
			<h2>{character.name}</h2>
		</>
	);
}
