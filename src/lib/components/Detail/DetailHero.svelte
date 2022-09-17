<script lang="ts">
	export let blogTitle: string;
	export let blogImage: string;
	export let blogDescription: string;
</script>

<section>
	<h2>{blogTitle}</h2>
	<p>{blogDescription}</p>
	<img src={blogImage} alt="{blogImage} Image" />
</section>

<style>

	section {
		max-width: 60rem;
		margin: 3rem auto 0;
		text-align: center;
	}
	h2 {
        margin: 0;
		padding: 0 1.2rem;
		font-size: 2rem;
	}

	p {
		font-size: 1.2rem;
		font-style: italic;
	}

    img {
        width: 100%;
		border-radius: .5rem;
    }

	@media(max-width: 50rem) {

		h2 {
			font-size: 1.5rem;
		}

		p {
			font-size: 1.2rem;
		}
		img {
			border-radius: 0;
		}
	}
</style>
