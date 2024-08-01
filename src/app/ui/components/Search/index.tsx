'use client';

import { LucideSearch, SearchCode } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

type SearchProps = {
	placeholder: string;
	className: string;
};

export default function Search({ placeholder, className }: SearchProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	// Using useDebounced
	// const handleSearch = useDebouncedCallback((term: string) => {
	// 	const params = new URLSearchParams(searchParams);

	// 	if (term) {
	// 		params.set('query', term);
	// 		console.info(params);
	// 	} else {
	// 		params.delete('query');
	// 	}
	// 	replace(`${pathname}?${params.toString()}`);
	// }, 300);

	const handleSearch = (term: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<>
			<div className="flex justify-center items-baseline">
				<label htmlFor="search" className="text-zinc-800">
					<LucideSearch size={18} />
				</label>
				<input
					type="text"
					required
					id="email"
					placeholder={placeholder}
					className="w-1/2 mb-36 py-3 px-4 text-3xl bg-transparent  font-sans border border-x-0 border-t-0 border-b-zinc-500
                        placeholder:text-3xl placeholder:font-light placeholder:text-zinc-700
                        focus:border-x-0  focus:border-t-0 focus:outline-none focus:border-b-border
												 hover:border-b-border hover:w-2/3 transition-[border-bottom-width, width, color] duration-500 ease-out
												 active:transition-none
                      "
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get('query')?.toString()}
				/>
			</div>
		</>
	);
}
