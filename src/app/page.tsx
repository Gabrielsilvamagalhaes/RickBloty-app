import Card from './ui/_components/Card';

export default async function Home() {
	return (
		<>
			<section className="grid grid-cols-3 gap-8 justify-evenly ">
				<Card />
			</section>
		</>
	);
}
