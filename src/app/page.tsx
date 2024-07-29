import Image from 'next/image';
import { getData } from './lib/api/get/getData';

export default async function Home() {
	const data = await getData();

	return (
		<>
			<h2>Personagens rick Morty</h2>
			<div>
				<p>{data.name}</p>
				<p>{data.species}</p>
				<div>
					<h3>First ten episodes</h3>
					{data?.episode?.map(
						(e, index) =>
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							index < 10 && <section key={index}>{e}</section>,
					)}
				</div>
				<Image
					src={data.image}
					alt={`${data.name} photo`}
					width={200}
					height={200}
				></Image>
			</div>
		</>
	);
}
