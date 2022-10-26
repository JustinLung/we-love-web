<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<BlogSection>
	{#each data.posts as posts}
		<BlogCard
			blogLink="/posts/{posts.id}"
			blogTitle={posts.title}
			blogDescription={posts.description}
			blogImage={posts.image.url}
		/>
	{/each}
</BlogSection>
