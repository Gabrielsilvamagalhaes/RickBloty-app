import Link from 'next/link';

export default function Header() {
	return (
		<>
			<header className="bg-secondary text-primary text-center w-100 p-10">
				<Link
					href={'/'}
					className=" no-underline cursor-pointer hover:opacity-50 text-5xl transition-all duration-100 ease-in-out"
				>
					Rick <span className="text-border">Bloty</span>
				</Link>
			</header>
		</>
	);
}
