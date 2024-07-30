import { JSXElementConstructor, ReactNode } from 'react';
import { LinkHeader } from '../../styles/Globals';
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
