'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { pages } from 'next/dist/build/templates/app-page';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
	totalPages: Promise<number>;
	className: string;
};

export default function Pagination({ totalPages, className }: PaginationProps) {
	const router = useRouter(); // Hook para navegação
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page')) || 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', pageNumber.toString());
		console.info(`${pathname}?${params.toString()}`);
		return `${pathname}?${params.toString()}`;
	};

	const handleNextPage = async () => {
		const pages = await totalPages;
		if (currentPage === pages) return;

		const nextPage = currentPage + 1;
		const newPageURL = createPageURL(nextPage);
		router.push(newPageURL);
	};

	const handlePrevPage = () => {
		if (currentPage === 1) return;

		const nextPage = currentPage - 1;
		const newPageURL = createPageURL(nextPage);
		router.push(newPageURL);
		router.back();
	};

	return (
		<>
			<div className={className}>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					onClick={handlePrevPage}
					className="cursor-pointer hover:text-border transition-colors duration-150"
				>
					<ChevronLeft size={40} />
				</div>

				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					onClick={handleNextPage}
					className="cursor-pointer hover:text-border transition-colors duration-150"
				>
					<ChevronRight size={40} />
				</div>
			</div>
		</>
	);
}
