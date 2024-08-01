export async function fetchFilterJson<T>(query: string, page = 1): Promise<T> {
	const url = query === '' ? '' : `name=${query}`;
	const urlPage = `page=${page}&`;

	const response = await fetch(`${process.env.API_URL}/?${urlPage}${url}`);
	const data: T = await response.json();

	return data;
}
