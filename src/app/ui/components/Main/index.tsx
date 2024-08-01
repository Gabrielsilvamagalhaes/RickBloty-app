type MainContainerProps = {
	children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
	return (
		<>
			<main className="max-w-960 min-h-screen mt-8 mb-14 mx-auto">
				{children}
			</main>
		</>
	);
}
