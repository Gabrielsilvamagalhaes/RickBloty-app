export async function fetchFilterJson<T>(query: string): Promise<T> {
	const url = query === '' ? '' : `?name=${query}`;

	const response = await fetch(`${process.env.API_URL}/${url}`);
	const data: T = await response.json();

	return data;
}
