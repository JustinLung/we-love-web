export async function client(query: string, variables?: object) {
	const response = fetch(
		`https://api-eu-central-1.hygraph.com/v2/cl849lwtn1mg901uj3dx815gy/master`,
		{
			method: 'POST',
			body: JSON.stringify({ query, variables })
		}
	);

	const { data } = await (await response).json();
	return data;
}
