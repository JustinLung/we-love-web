<script lang="ts">
	import { goto } from "$app/navigation";

    function navigate() {
        goto('/blog')
    }
</script>

<section>
	<h2>Sharing the most intressting content about the web on this blog</h2>
	<p>
		In this blog I'm going to write about the things that I've encountered as a frontend developer.
	</p>
    <button on:click={navigate}>Blogs</button>
</section>

<style>
    h2 {
        font-size: 1.5rem;
        margin: 0;
    }

    p {
        font-size: 1.2rem;
        margin: 0;
    }

    section {
        padding: 3rem 1rem;
        background: var(--color-light-blue);
    }

    button {
        all: unset;
        background-color: var(--color-white);
        border-radius: .3rem;
        padding: .5rem 2rem;
        margin-top: .5rem;
    }
</style>
