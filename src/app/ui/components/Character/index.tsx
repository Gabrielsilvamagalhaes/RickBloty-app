import { characterData } from '@/app/_lib/types/character';
import Image from 'next/image';
import FlipCard from '../FlipCard';

export default function Character({ data }: { data: characterData }) {
	return (
		<>
			<section className="">
				<FlipCard characterEps={data.episode as string[]}>
					<div className="w-full  bg-default rounded-3xl   px-6">
						<div className="flex justify-center">
							<Image
								src={data.image}
								alt={`${data.name} photo`}
								width={150}
								height={140}
								className="my-6 mx-0 rounded-full"
							></Image>
						</div>
						<h1>{data.name}</h1>
						<h4>Status</h4>
						<p>Description</p>
						<p>episodies</p>
					</div>
				</FlipCard>
			</section>
		</>
	);
}
