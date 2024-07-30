import { Container } from './styles';

type MainContainerProps = {
	children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
	return (
		<>
			<Container>{children}</Container>
		</>
	);
}
