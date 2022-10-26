import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async () => {
	const query = `
            query Posts {
                posts {
                    id
                    title
                    description
                    createdBy {
                        name
                    }
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
