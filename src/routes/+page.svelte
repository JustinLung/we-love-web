<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PageTransition>
	<BlogSection>
		{#each data.posts as posts}
			<BlogCard
				blogWriter={posts.createdBy.name}
				blogLink="/posts/{posts.id}"
				blogTitle={posts.title}
				blogDescription={posts.description}
				blogImage={posts.image.url}
			/>
		{/each}
	</BlogSection>
</PageTransition>
