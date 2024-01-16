<template>
  <div class="projects page">
    <h1>Sandbox</h1>
    <ul>
      <li v-for="(project, index) in projects" :key="index" class="project">
        <a :href="project.url" target="_blank">
          <p class="project-name">{{ project.name }} <span>&rarr;</span></p>
          <p class="project-description">
            {{ project.description }}
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "digits game (WIP)",
          description: "How many digits can you memorize?",
          url: "https://digitsgame.netlify.app",
        },
        {
          name: "ideabag 2",
          description:
            "Ideas for projects to work on as you learn a new programming language",
          url: "https://play.google.com/store/apps/details?id=com.alansa.ideabag2",
        },
        {
          name: "actioncable-vue",
          description:
            "A Vue plugin that makes integrating Rails Action Cable dead-easy.",
          url: "https://www.npmjs.com/package/actioncable-vue",
        },
        {
          name: "chattabox",
          description: "Fun shout-it-out game for players of all ages.",
          url: "https://play.google.com/store/apps/details?id=com.alansa.chattabox",
        },
        {
          name: "rlox (WIP)",
          description:
            "A Ruby implementation of the Lox programming language (https://www.craftinginterpreters.com/)",
          url: "https://github.com/mclintprojects/rlox",
        },
      ],
    };
  },
};
</script>

<style>
.projects ul {
  margin-top: 3rem;
  margin-left: 0;
}

.projects ul li {
  list-style-type: none;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid rgb(241, 241, 241);
  padding-bottom: 1.6rem;
}

.projects ul li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.projects ul li a {
  text-decoration: none;
}

.project a {
  color: black;
}

.project a div {
  margin-right: 4.8rem;
}

.project-name {
  font-size: 1.8rem;
  font-weight: bold;
}

.project-description {
  color: var(--text-primary-light);
  word-wrap: break-word;
  word-break: break-word;
}
</style>
