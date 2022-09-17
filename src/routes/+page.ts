import { error } from '@sveltejs/kit';
import createClient from '$lib/vendors/prismicio';

export async function load({ fetch, request }: any) {
	const client = createClient({ fetch, request });
	const documents = await client.getAllByType('post');

	if (documents) {
		return { documents };
	}
	error(404, 'Not Found');
}
