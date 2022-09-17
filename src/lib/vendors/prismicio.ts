import * as prismic from '@prismicio/client';

const repoName = 'weloveweb';
const accessToken = '';

const createClient = ({ request, fetch }: any = {}) => {
	const clientOptions = {
		fetch,
		accessToken
	};
	const client = prismic.createClient(repoName, clientOptions);

	if (request) {
		client.enableAutoPreviewsFromReq(request);
	}

	return client;
};

export default createClient;
