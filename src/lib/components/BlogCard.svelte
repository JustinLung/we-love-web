<script lang="ts">
	export let blogImage: string;
	export let blogTitle: string;
	export let blogDescription: string;
	export let blogLink: string;
</script>

<a href={blogLink}>
	<article>
		<img src={blogImage} alt={blogTitle} />
		<div>
			<h2>{blogTitle}</h2>
			<p>{blogDescription}</p>
		</div>
	</article>
</a>

<style>
	article {
		max-width: 30rem;
		height: 25rem;
		border-radius: 0.3rem;
		overflow: hidden;
		background-color: var(--color-green);
	}

	img {
		width: 100%;
	}

	div {
		padding: 1rem;
	}

	h2 {
		font-weight: bold;
		font-size: 1.5rem;
	}
</style>
