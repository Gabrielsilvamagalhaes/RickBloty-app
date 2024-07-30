import { characterData } from '@/app/lib/types/character';
import Image from 'next/image';
import { Container } from './styles';

type HomeProps = {
	characters: characterData[];
};
export default function Home({ characters }: HomeProps) {
	return (
		<>
			{characters.map((character) => (
				<Container key={character.id}>
					<h2>{character.name}</h2>
					<p>{character.species}</p>
					<Image
						src={character.image}
						alt={`${character.name} photo`}
						width={150}
						height={140}
					/>
				</Container>
			))}
		</>
	);
}
