'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Product() {
	const { id } = useParams();
	return (
		<>
			<h2>Product {id}</h2>
			<Link href={'./'}>Products Page</Link>
		</>
	);
}
