import type { RequestHandler } from '@sveltejs/kit';
import { client } from '$lib/util';

export const get: RequestHandler = async () => {
	const query = `query Posts {
        posts {
          slug
          title
          description
        }
      }
      `;

	const data = await client(query);

	return {
		body: {
			posts: data.posts
		}
	};
};
