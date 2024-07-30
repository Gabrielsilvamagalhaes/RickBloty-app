import { characterData } from '@/app/_lib/types/character';
import Image from 'next/image';
import Link from 'next/link';
import { CardHeading, CardImage, CardLink, Container } from './styles';

type CardProps = {
	characters: characterData[];
};
export default function Card({ characters }: CardProps) {
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
