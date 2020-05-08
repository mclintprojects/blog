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
  --page-width: 40%;
  --bg: #ffffff;
  --text-primary: rgba(0, 0, 0, 1);
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
  font-family: "Hind", sans-serif;
}

.page {
  width: var(--page-width);
  margin: auto;
  font-size: 1.6rem;
  margin-top: 3rem;
}

.content__default {
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
    font-size: 1.6rem;
    line-height: 2.4rem;
    word-wrap: break-word;
  }

  ol {
    margin-left: 1.6rem;
    font-size: 2rem;

    li {
      margin-bottom: 1.6rem;
    }
  }

  strong {
    color: var(--text-primary);
  }

  pre {
    background: #171822;
    border-radius: 1rem;
    padding: 1.6rem 2.4rem;
    font-family: "consolas";
    font-size: 1.2rem;
    white-space: pre-wrap;
    overflow: auto;

    code {
      background: none;
      color: rgb(188, 212, 210);
      padding: 0;

      .tag,
      .keyword,
      .operator {
        color: #abbdc9;
      }

      .attr-name,
      .function,
      .constant {
        color: #2f97b1;
      }

      .punctuation,
      .class-name {
        color: rgb(130, 238, 252);
      }

      .symbol {
        color: #b6e5fa;
      }

      .comment {
        font-style: italic;
        color: rgba(255, 255, 255, 0.54);
      }
    }
  }
}

.content__default code {
  background: #171822;
  color: white;
  font-family: "consolas";
  font-size: 1.2rem;
  padding: 0.2rem 0.8rem;
  border-radius: 0.3rem;
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

  .content__default {
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