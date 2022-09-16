<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/style.css';
	import '../styles/theme.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
