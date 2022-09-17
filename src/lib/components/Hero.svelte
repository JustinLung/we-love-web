<script lang="ts">
	import { goto } from '$app/navigation';

	function navigate() {
		goto('/blog');
	}
</script>

<section>
	<h2>Always hungry for new knowledge.</h2>
	<div>
		<p>Find articles and stories about the fundementals and my experiences about the web.</p>
		<button on:click={navigate}>Read More</button>
	</div>
</section>

<style>
	section {
		padding: 2rem 1.2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		max-width: 60rem;
		margin: 0 auto;
		height: 15rem;
	}

	h2 {
		margin: 0;
		font-size: 3rem;
		max-width: 30rem;
	}
	p {
		margin: 0;
		font-size: 1.2rem;
		max-width: 30rem;
	}

	button {
		all: unset;
		background-color: var(--color-light-blue);
		color: var(--color-white);
		padding: .5rem 1rem;
		font-size: 1.2rem;
		border-radius: .3rem;
		margin-top: .5rem;
	}

	@media(max-width: 50rem) {
		section {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
