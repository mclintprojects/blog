const baseUrl = "clintonmbah.com";

module.exports = {
  title: "Clinton Mbah",
  description:
    "Computer programmer currently focused on building delightful and impactful consumer products.",
  head: [
    ["link", { rel: "icon", href: `/selfie.png` }],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fugaz+One:wght@400;700&family=Inter:wght@400&display=swap",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  plugins: {
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: ($page) => $page.frontmatter.title,
      author: () => ({ name: "Clinton Mbah", twitter: "@mclint_" }),
      tags: ($page) => $page.frontmatter.tags,
      twitterCard: (_) => "summary_large_image",
      url: (_, __, path) => `${baseUrl}${path}`,
      image: () => `${baseUrl}/images/banner.png`,
      publishedAt: ($page) => new Date($page.frontmatter.published),
    },
  },
};
