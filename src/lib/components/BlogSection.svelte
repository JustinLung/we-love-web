<script lang="ts">
    export let blogSectionTitle: string;
</script>

<section>
	<h2>{blogSectionTitle}</h2>
	<slot />
</section>

<style>
    section {
        padding: 1rem 1.2rem;
    }

    h2 {
        margin: 0;
        margin-bottom: .5rem;
    }
</style>