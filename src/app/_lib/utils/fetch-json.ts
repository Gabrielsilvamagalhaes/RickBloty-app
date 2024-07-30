export async function fetchJson<T>(url = ''): Promise<T> {
	const response = await fetch(`${process.env.API_URL}/${url}`);
	if (response.ok) {
		const data = await response.json();

		return data;
	}
	throw new Error('Failed to fetch data');
}
