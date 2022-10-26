import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
            query Posts {
                posts {
                    id
                    slug
                    title
                    description
                    image {
                        url
                    }
            }
        }`;
	const data = await client({ query, fetch: fetch });
	return {
		posts: data.posts
	};
};
