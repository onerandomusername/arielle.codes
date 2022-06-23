<script>
	export let title = 'Titleless';
	export let date = '1-1-1970';
</script>

<svelte:head>
	<title>arielle's blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<p><i>Published: {date}</i></p>

<slot />
