<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';

	export let data: any;
</script>

<Hero />
<BlogSection blogSectionTitle="Latest Posts">
	{#if data && Object.keys(data).length}
		{#each data.documents as data}
			<BlogCard
				blogPostTitle={data.data.title}
				blogPostDescription={data.data.description}
				blogImage={data.data.image.url}
				blogLink="/blog/{data.uid}"
			/>
		{/each}
	{/if}
</BlogSection>
