<script lang="ts">
	export let blogImage: string;
	export let blogTitle: string;
	export let blogDescription: string;
	export let blogWriter: string;
	export let blogLink: string;
</script>

<a href={blogLink}>
	<article>
		<div class="image-container">
			<img src={blogImage} alt={blogTitle} />
		</div>
		<div class="content">
			<p>Door: {blogWriter}</p>
			<h2>{blogTitle}</h2>
			<p>{blogDescription}</p>
		</div>
		<a href={blogLink} class="cta">Lees meer</a>
	</article>
</a>

<style>
	article {
		width: 25rem;
		height: 24rem;
		border-radius: 0.3rem;
		overflow: hidden;
		background-color: var(--color-green);
		border: 1px solid var(--color-green);
		transition: 0.3s ease;
	}

	article:hover,
	article:focus {
		background-color: transparent;
		border: 1px solid var(--color-green);
	}

	.image-container {
		height: 15rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		padding: 0.5rem 1rem;
	}

	article:hover .cta,
	article:focus .cta {
		background-color: var(--color-green);
	}

	.cta {
		background-color: var(--color-dark);
		padding: 0.2rem 1rem;
		border-radius: 0.2rem;
		margin-left: 1rem;
	}

	h2 {
		font-weight: bold;
		font-size: 1.5rem;
	}

	@media (max-width: 50rem) {
		article {
			width: 20rem;
			height: 25rem;
		}
	}
</style>
