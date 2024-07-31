'use client';

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

		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<>
			<div>
				<label htmlFor="search">Search</label>
				<input
					type="text"
					placeholder={placeholder}
					className={className}
					onChange={(e) => handleSearch(e.target.value)}
					defaultValue={searchParams.get('query')?.toString()}
				/>
			</div>
		</>
	);
}
