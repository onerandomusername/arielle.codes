export const get = async () => {
	const allPostFiles = import.meta.glob('../../blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: '/blog' + postPath
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
	});

	return {
		body: sortedPosts
	};
};
