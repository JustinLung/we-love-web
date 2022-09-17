import { error } from '@sveltejs/kit';

import createClient from '$lib/vendors/prismicio';

export async function load({ fetch, params, request }: any) {
	const { uid } = params;
	const client = createClient({ fetch, request });
	const document = await client.getByUID('post', uid);

	if (document) {
		return { document: document.data };
	}

	error(404, 'Not found');
}
