<script lang="ts">
	import DetailHero from '$lib/components/Detail/DetailHero.svelte';
	import DetailContent from '$lib/components/Detail/DetailContent.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const {title, image, content} = data.document
</script>

<DetailHero blogTitle={title} blogImage={image.url} />
<DetailContent blogContent={content} />
