import logoImage from '@/../public/logo.png';
import Image from 'next/image';

export default function Footer() {
	return (
		<>
			<footer className="bg-secondary text-primary text-center w-100 p-7">
				<div className="flex items-center justify-around flex-wrap">
					<Image
						alt="Rick and morty log"
						height={80}
						width={200}
						src={logoImage.src}
					></Image>
					<h2 className=" hover:text-border inline text-2xl">
						Feito por Gabriel Magalhães
					</h2>
				</div>
			</footer>
		</>
	);
}
