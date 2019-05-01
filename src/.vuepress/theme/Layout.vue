<template>
  <div>
    <navbar @modechange="modeChanged"></navbar>
    <home v-if="$page.frontmatter.home"/>
    <post v-else/>
  </div>
</template>

<script>
import Home from "./Home";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

export default {
  components: { Home, Navbar, Post },
  methods: {
    modeChanged(mode) {
      if (mode == "dark") this.switchToDark();
      else this.switchToLight();

      localStorage.setItem("mode", mode);
    },
    switchToDark() {
      const root = document.documentElement.style;
      root.setProperty("--bg", "#000000");
      root.setProperty("--text-primary", "white");
      root.setProperty("--text-primary-light", "rgba(255, 255, 255, 0.54)");
    },
    switchToLight() {
      const root = document.documentElement.style;
      root.setProperty("--bg", "#f8f2e5");
      root.setProperty("--text-primary", "rgba(0, 0, 0, 0.8)");
      root.setProperty("--text-primary-light", "rgba(0, 0, 0, 0.54)");
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
:root {
  --page-width: 74rem;
  --bg: #f8f2e5;
  --text-primary: rgba(0, 0, 0, 0.8);
  --text-primary-light: rgba(0, 0, 0, 0.54);
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg);
  transition: all 500ms;
  color: var(--text-primary-light);
  font-family: "Oxygen", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.page {
  width: var(--page-width);
  margin: auto;
  font-size: 1.6rem;
  margin-top: 3rem;
  margin-bottom: 10rem;
}

.content {
  margin-top: 6rem;

  p,
  h1,
  h2,
  pre,
  ol {
    margin-top: 3rem;
  }

  p {
    line-height: 3rem;
    font-size: 2rem;
  }

  ol {
    margin-left: 3rem;

    li {
      margin-bottom: 2.4rem;
    }
  }

  strong {
    color: var(--text-primary);
  }

  pre {
    background: #292d3e;
    border-radius: 1rem;
    padding: 1.6rem;
    font-family: "Oxygen Mono", monospace;

    code {
      white-space: pre-wrap;
      background: none;
      color: white;

      .tag,
      .keyword,
      .operator {
        color: #809fff;
      }

      .attr-name,
      .function {
        color: #ffe232;
      }

      .punctuation,
      .class-name {
        color: white;
      }

      .comment {
        font-style: italic;
        color: rgba(255, 255, 255, 0.54);
      }
    }
  }
}

.content code {
  background: #f3f4f4;
}

a {
  color: var(--text-primary);
  text-decoration: none;
}

@media screen and (max-width: 480px) {
  :root {
    --page-width: 100%;
  }

  body {
    padding: 0 1.6rem;
  }
}
</style>