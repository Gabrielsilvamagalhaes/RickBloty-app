import { getAllCharacters } from '@/app/_lib/api/get/findAll';
import { CardHeading, CardImage, CardLink, Container } from './styles';

export default async function Card() {
	const characters = await getAllCharacters();

	return (
		<>
			{characters.map((character) => (
				<Container key={character.id}>
					<CardHeading>{character.name}</CardHeading>
					<p>{character.species}</p>
					<CardImage
						src={character.image}
						alt={`${character.name} photo`}
						width={150}
						height={140}
					></CardImage>
					<CardLink href={`./character/${character.id}`} target="_blank">
						Saiba mais
					</CardLink>
				</Container>
			))}
		</>
	);
}
