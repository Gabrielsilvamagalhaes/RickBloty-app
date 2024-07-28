'use client';
import Link from 'next/link';

export default function Page() {
	return (
		<>
			<h2>Products Page</h2>
			<Link href={'./products/10'}>Product 10</Link>
		</>
	);
}
