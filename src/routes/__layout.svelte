<!-- __layout.svelte -->
<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '$lib/styles/style.css';
</script>

<br />
<Header />

<main>
	<slot />
</main>

<Footer />
