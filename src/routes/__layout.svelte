<!-- __layout.svelte -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '$lib/styles/style.scss';
	import '$lib/themes/prism-laserwave.css';
</script>

<br />
<Header />

<main>
	<slot />
</main>

<Footer />
