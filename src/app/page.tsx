import { getAllCharacters } from './lib/api/get/findAll';
import HomePage from './ui/components/Home';
import MainContainer from './ui/components/Main';

export default async function Home() {
	const data = await getAllCharacters();

	return (
		<>
			<MainContainer>
				<HomePage characters={data} />
			</MainContainer>
		</>
	);
}
