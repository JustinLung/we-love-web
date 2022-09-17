<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<BlogSection blogSectionTitle="Blogs">
	{#each data.documents as data}
		<BlogCard
			blogPostTitle={data.data.title}
			blogPostDescription={data.data.description}
			blogImage={data.data.image.url}
			blogLink="/blog/{data.data.uid}"
		/>
	{/each}
</BlogSection>
