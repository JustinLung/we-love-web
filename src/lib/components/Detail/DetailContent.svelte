<script lang="ts">
	export let blogContent: string;
</script>

<p>{blogContent}</p>

<style>
	p {
		padding: 1.2rem;
        max-width: 60rem;
        margin: 0 auto;
        font-size: 1.2rem;
	}

    @media(max-width: 55rem) {
        p {
            font-size: 1rem;
        }
    }
</style>
