import { Container, Loader } from './ui/styles/Loader';

export default function Loading() {
	return (
		<Container>
			<div className="fullscreen"></div>
			<Loader />
		</Container>
	);
}
