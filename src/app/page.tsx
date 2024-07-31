import { Suspense } from 'react';
import Loading from './loading';
import Card from './ui/_components/Card';
import Search from './ui/_components/Search';

export default async function Home({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: string;
	};
}) {
	const query = searchParams?.query ?? '';
	const currentPage = Number(searchParams?.page) ?? 1;

	return (
		<>
			<Search placeholder="Search for characters..." className="mb-32" />
			<section className="grid grid-cols-3 gap-8 justify-evenly ">
				{/* <Suspense key={query + currentPage} fallback={<Loading />}> */}
				<Card query={query} page={currentPage} />
				{/* </Suspense> */}
			</section>
		</>
	);
}
