import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { seoPlugin } from "@vuepress/plugin-seo";
import { usePagesPlugin } from "vuepress-plugin-use-pages";

const baseUrl = "clintonmbah.com";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({}),
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
        href: "https://fonts.googleapis.com/css2?family=Tac+One:wght@400;700&family=Inter:wght@400&display=swap",
      },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  plugins: [
    seoPlugin({
      hostname: `https://${baseUrl}`,
    }),
    usePagesPlugin({
      startsWith: "/posts",
      filter: (page) => page.path.endsWith(".html") && !page.frontmatter.route,
      sort: (page, next) =>
        new Date(next.frontmatter.published).getTime() -
        new Date(page.frontmatter.published).getTime(),
    }),
  ],
});
