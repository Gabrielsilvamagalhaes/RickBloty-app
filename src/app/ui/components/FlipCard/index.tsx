import imgas from '@/../public/fundo.jpeg';
import Image from 'next/image';

export default function FlipCard({
	children,
	characterEps,
}: { children: React.ReactNode; characterEps: string[] }) {
	return (
		<>
			<div className="flex min-h-screen justify-center bg-transparent">
				<div className="group h-96 w-sixty [perspective:1000px] ">
					<div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
						<div className="absolute inset-0">{children}</div>
						<div className="absolute inset-0 h-full w-full rounded-xl  p-8 bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] "></div>
					</div>
				</div>
			</div>
		</>
	);
}
