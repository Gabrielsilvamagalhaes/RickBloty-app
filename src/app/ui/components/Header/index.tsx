import { LinkHeader } from '../../styles/Globals';
import { Container } from './styles';

export default function Header() {
	return (
		<>
			<Container>
				<LinkHeader href={'./'} className="link">
					Rick Bloty
				</LinkHeader>
			</Container>
		</>
	);
}
