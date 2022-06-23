<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/blog/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts = Array();
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Blog</h1>

<ul>
	{#if posts.length > 0}
		{#each posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				<i>Published {post.meta.date}</i>
			</li>
		{/each}
	{:else}
		<i>No posts found.</i>
	{/if}
</ul>
