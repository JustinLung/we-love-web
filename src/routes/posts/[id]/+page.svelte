<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header>
	<a href="/">Return Home</a>
</header>
<section>
	<img src={data.image.url} alt={data.title} />
	<span>Door: {data.createdBy.name}</span>
	<h1>{data.title}</h1>
	<p>{data.description}</p>
	<div>
		{@html data.content.html}
	</div>
</section>

<style>
	header {
		max-width: 50rem;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	a {
		font-weight: bold;
	}

	section {
		max-width: 50rem;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	img {
		width: 100%;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-weight: bold;
		margin: 1rem 0;
		font-weight: 1.2rem;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		font-size: 1rem;
	}
</style>
