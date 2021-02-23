const baseUrl = 'blog.clintonmbah.com'

module.exports = {
	title: 'Clinton Mbah',
	description:
		'Full-stack software engineer specializing in web and mobile applications. Kotlin/Android, JavaScript/Vue/Node, and Ruby/Rails 5.',
	head: [
		['link', { rel: 'icon', href: `/selfie.svg` }],
		[
			'link',
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com'
			}
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap'
			}
		]
	],
	plugins: {
		'seo': {
			siteTitle: (_, $site) => $site.title,
			title: $page => $page.frontmatter.title,
			description: $page => $page.frontmatter.description,
			author: () => ({ name: "Clinton Mbah", twitter: "@mclint_" }),
			tags: $page => $page.frontmatter.tags,
			twitterCard: _ => 'summary_large_image',
			url: (_, __, path) => `${baseUrl}${path}`,
			image: () => `${baseUrl}/images/banner.png`,
			publishedAt: $page => new Date($page.frontmatter.published),
		}
	}
};
