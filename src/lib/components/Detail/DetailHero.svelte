<script lang="ts">
	export let blogTitle: string;
	export let blogImage: string;
</script>

<section>
	<h2>{blogTitle}</h2>
	<img src={blogImage} alt="{blogImage} Image" />
</section>

<style>
	h2 {
        margin-top: 0;
		padding: 0 1.2rem;
	}

    img {
        width: 100%;
    }
</style>
