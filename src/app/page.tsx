import { getAllCharacters } from './_lib/api/get/findAll';
import Card from './ui/_components/Home';
import MainContainer from './ui/_components/Main';

export default async function Home() {
	const data = await getAllCharacters();

	return (
		<>
			<MainContainer>
				<Card characters={data} />
			</MainContainer>
		</>
	);
}
