<script lang="ts">
	export let blogPostTitle: string;
	export let blogPostDescription: string;
	export let blogLink: string;
	export let blogImage: string;
</script>

<a href={blogLink}>
	<article>
		<div>
			<img src={blogImage} alt="{blogPostTitle} Image" />
		</div>
		<div>
			<h3>{blogPostTitle}</h3>
			<p>{blogPostDescription}</p>
			<a href={blogLink}>Read more</a>
		</div>
	</article>
</a>

<style>
	article {
		border-radius: 0.5rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	}
	img {
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		width: 100%;
		height: 15rem;
		object-fit: cover;
	}

	div:first-child {
		height: 30%;
		width: 100%;
	}

	div:last-child {
		padding: 1rem;
	}

	a {
		text-decoration: none;
		color: var(--color-muave-light);
	}

	h3,
	p {
		margin: 0;
	}

	@media (max-width: 55rem) {
		article {
			width: 90vw;
		}
	}
</style>
