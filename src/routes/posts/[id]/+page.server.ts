import type { PageServerLoad } from './$types';
import { client } from '$lib/vendors/utils';

export const load: PageServerLoad = async ({ params }) => {
	const query = `
            query Post($id: ID) {
  post(where: {id: $id}) {
    title
    description
    createdBy {
        name
    }
    content {
        html
    }
    image {
      url
    }
  }
}
`;
	const data = await client({ query, variables: { id: params.id }, fetch: fetch });
	return { ...data.post };
};
