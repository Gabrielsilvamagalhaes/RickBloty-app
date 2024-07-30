import { getAllCharacters } from './lib/api/get/findAll';
import Card from './ui/components/Home';
import MainContainer from './ui/components/Main';

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
