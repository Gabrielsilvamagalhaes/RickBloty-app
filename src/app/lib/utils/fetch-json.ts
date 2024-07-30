export async function fetchJson<T>(url: string): Promise<T> {
	const response = await fetch(url);
	if (response.ok) {
		const data = await response.json();

		return data;
	}
	throw new Error('Failed to fetch data');
}
