<!-- __layout.svelte -->
<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '$lib/styles/style.scss';
	import '$lib/themes/prism-laserwave.css';
</script>

<meta property="og:site_name" content="arielle.codes" />
<meta property="og:title" content="arielle" />
<meta property="og:type" content="website" />
<meta property="og:description" content="My website." />
<meta property="og:url" content="https://arielle.codes/" />
<meta property="og:image" content="http://arielle.codes/favicon.png" />
<meta name="theme-color" content="#f5a9b8" />
<br />
<Header />

<main>
	<slot />
</main>

<Footer />
