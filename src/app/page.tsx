import { Suspense } from 'react';
import { getFilterPages } from './_lib/api/get/filterPages';
import Loading from './loading';
import Card from './ui/components/Card';
import Pagination from './ui/components/Pagination';
import Search from './ui/components/Search';

export default function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query ?? '';
	const currentPage = Number(searchParams?.page) ?? 1;
	const totalPages = getPages(query);

	async function getPages(query: string) {
		return await getFilterPages(query);
	}

	return (
		<>
			<Search placeholder="Search for characters..." className="mb-36" />
			<section className="grid grid-cols-autofill gap-8 justify-evenly  ">
				{/* <Suspense key={query + currentPage} fallback={<Loading />}> */}
				<Card query={query} page={currentPage} />
				{/* </Suspense> */}
			</section>
			<Suspense>
				<Pagination
					className="mt-20 flex justify-around"
					totalPages={totalPages}
				/>
			</Suspense>
		</>
	);
}
