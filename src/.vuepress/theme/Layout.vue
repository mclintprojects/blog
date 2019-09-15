<template>
  <div>
    <navbar @modechange="modeChanged"></navbar>
    <home v-if="$page.frontmatter.home" />
    <post v-else />
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
      root.setProperty("--text-primary-light", "rgba(255, 255, 255, 0.7)");
    },
    switchToLight() {
      const root = document.documentElement.style;
      root.setProperty("--bg", "#ffffff");
      root.setProperty("--text-primary", "rgba(0, 0, 0, 0.8)");
      root.setProperty("--text-primary-light", "rgba(0, 0, 0, 0.7)");
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
:root {
  --page-width: 74rem;
  --bg: #ffffff;
  --text-primary: rgba(0, 0, 0, 0.8);
  --text-primary-light: rgba(0, 0, 0, 0.7);
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
  font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.page {
  width: var(--page-width);
  margin: auto;
  font-size: 1.6rem;
  margin-top: 3rem;
}

.content {
  margin-top: 6rem;

  a {
    text-decoration: underline;
  }

  p,
  h1,
  h2,
  h3,
  pre,
  ol {
    margin-top: 3rem;
  }

  p,
  li {
    font-size: 2rem;
    line-height: 3rem;
    word-wrap: break-word;
  }

  ol {
    margin-left: 1.6rem;
    font-size: 2rem;

    li {
      margin-bottom: 2.4rem;
    }
  }

  strong {
    color: var(--text-primary);
  }

  pre {
    background: #171822;
    border-radius: 1rem;
    padding: 1.6rem 2.4rem;
    font-family: "DM Sans", monospace;
    white-space: pre-wrap;
    overflow: auto;

    code {
      background: none;
      color: rgb(82, 255, 241);

      .tag,
      .keyword,
      .operator {
        color: #0040ff;
      }

      .attr-name,
      .function,
      .constant {
        color: #ffe232;
      }

      .punctuation,
      .class-name {
        color: rgb(170, 226, 233);
      }

      .symbol {
        color: #e0057e;
      }

      .comment {
        font-style: italic;
        color: rgba(255, 255, 255, 0.54);
      }
    }
  }
}

.content code {
  background: #0040ff;
  color: white;
  font-family: "Oxygen Mono", monospace;
  font-size: 1.8rem;
}

a {
  color: var(--text-primary);
  text-decoration: none;
}

@media screen and (max-width: 48rem) {
  :root {
    --page-width: 100%;
  }

  body {
    padding: 0 1.6rem;
  }

  ul {
    margin-left: 1.6rem;
  }

  .content {
    pre {
      white-space: pre;
      code {
        font-size: 1.3rem;
      }
    }

    p,
    li {
      font-size: 1.8rem;
    }
  }
}
</style>