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
		border: 1px solid var(--color-light-blue);
		padding: 0.5rem 1rem;
		font-size: 1.2rem;
		border-radius: 0.3rem;
		margin-top: 0.5rem;
		cursor: pointer;
		transition: 0.3s ease-in-out;
	}

	button:hover {
		background-color: var(--color-white);
		color: var(--color-light-blue);
		border: 1px solid var(--color-light-blue);
	}

	button:focus {
		background-color: var(--color-white);
		color: var(--color-light-blue);
		border: 1px solid var(--color-light-blue);
	}

	@media (max-width: 50rem) {
		section {
			flex-direction: column;
			align-items: flex-start;
			height: 10rem;
		}
		h2 {
			font-size: 2rem;
		}

		p,
		button {
			font-size: 1rem;
		}
	}
</style>
