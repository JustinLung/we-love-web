<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Hero />
<BlogSection blogSectionTitle="Latest Posts">
	{#each data.documents as data}
		<BlogCard blogPostTitle={data.data.title} blogPostDescription={data.data.description} blogImage={data.data.image.url} blogLink="/blog/{data.uid}"/>
	{/each}
</BlogSection>
