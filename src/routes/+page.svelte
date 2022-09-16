<script ts="lang">
	import Hero from '$lib/components/Hero.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSection from '$lib/components/BlogSection.svelte';
</script>

<Hero />
<BlogSection blogSectionTitle="Latest Posts">
	<BlogCard
		blogPostTitle="YourBrandHub"
		blogPostDescription="description of yourbrandhub"
		blogLink="/"
	/>
</BlogSection>
