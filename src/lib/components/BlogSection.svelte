<section>
	<h1>We Love Web - Blog</h1>
	<p>Leuke blog verhaaltjes over het web van Justin!</p>
	<div>
		<slot />
	</div>
</section>

<style>
	section {
		max-width: 70rem;
		margin: 0 auto;
	}

	h1 {
		font-size: 2rem;
		text-align: center;
		margin-top: 2.5rem;
	}

	p {
		text-align: center;
		margin-bottom: 2.5rem;
		font-size: 1.2rem;
	}

	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1.5rem;
	}
</style>
