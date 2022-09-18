<script lang="ts">
	export let blogSectionTitle: string;
</script>

<section>
	<h2>{blogSectionTitle}</h2>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		max-width: 60rem;
		margin: 0 auto;
		margin-bottom: 2rem;
		padding: 1.2rem;
	}

	div {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}

	h2 {
		margin: 0;
		margin-bottom: 0.5rem;
	}
</style>
