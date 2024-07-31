import { getFilterCharacters } from '@/app/_lib/api/get/filter';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
	query: string;
	page: number;
};

export default async function Card({ query, page }: CardProps) {
	const characters = await getFilterCharacters(query);

	return (
		<>
			{characters ? (
				characters.map((character) => (
					<section
						key={character.id}
						className="h-full box-border p-8 flex items-center flex-col rounded-3xl bg-card text-primary group"
					>
						<h2 className="text-3xl text-center font-light group-hover:text-border">
							{character.name}
						</h2>
						<p className="text-2xl opacity-70">{character.species}</p>
						<Image
							src={character.image}
							alt={`${character.name} photo`}
							width={150}
							height={140}
							className="my-6 mx-0 hover:border-2 hover:border-solid hover:border-transparent"
						></Image>
						<Link
							href={`./character/${character.id}`}
							target="_blank"
							className="no-underline font-bold text-3xl rounded-3xl bg-secondary py-4 px-10 border-2 border-solid border-transparent transition-opacity duration-1000 ease-out hover:border-border hover:text-border active:opacity-20"
						>
							Saiba mais
						</Link>
					</section>
				))
			) : (
				<h2 className="text-center">Not Found</h2>
			)}
		</>
	);
}
