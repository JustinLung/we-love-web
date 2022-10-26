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
		<div>
			<p>Door: {blogWriter}</p>
			<h2>{blogTitle}</h2>
			<p>{blogDescription}</p>
		</div>
	</article>
</a>

<style>
	article {
		width: 25rem;
		height: 22rem;
		border-radius: 0.3rem;
		overflow: hidden;
		background-color: var(--color-green);
	}

	.image-container {
		height: 15rem;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	div:last-child {
		padding: 1rem;
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
