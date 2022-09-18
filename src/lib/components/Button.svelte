<button><slot /></button>

<style>
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
		button {
			font-size: 1rem;
		}
	}
</style>
