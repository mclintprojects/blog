<template>
  <div class="home page">
    <div class="introduction">
      <div>
        <h1>Clinton "Anwu" Mbah</h1>
        <p>
          Heyyoo — I'm Clinton. A programmer that *really likes* design. I'm
          also a hobbyist photographer and digital artist.
        </p>
        <ul class="introduction-socials">
          <li>
            <a href="twitter.com/mclint_">Twitter</a>
          </li>
          <li>
            <a href="twitter.com/mclint_">GitHub</a>
          </li>
          <li>
            <a href="twitter.com/mclint_">VSCO</a>
          </li>
          <li>
            <a href="twitter.com/mclint_">Inprnt</a>
          </li>
          <li>
            <a href="mailto:clintonmbah44@gmail.com">Email</a>
          </li>
        </ul>
      </div>
      <div class="about-me">
        <p>
          I love designing and building delightful consumer products. I'm also
          insatiably curious about crypto, art, games, sci-fi anything, and
          music.
        </p>
        <p class="mt-2">
          I spend most of my time on
          <a href="https://useaccrue.com">Accrue</a>. We're building
          <a href="https://cashramp.co">Cashramp</a> — a continent-wide
          stablecoin agent network for fast and cheap cross-border payments
          within Africa. I think it'll be a game-changer for cross-border
          commerce in Africa by the end of this decade.
        </p>
        <p class="mt-2">
          In my free time, I enjoy reading essays, biographies, and fiction
          novels. You can also find me working on small apps & games or painting
          portraitures in Procreate.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.introduction h1 + p {
  text-transform: none;
  font-size: 1.4rem;
  margin-top: 0.4rem;
  margin-bottom: 1.6rem;
}

.introduction-socials {
  padding: 0;
  margin: 0;
  display: flex;
}

.introduction-socials li {
  margin-right: 0.8rem;
  list-style-type: none;
}

.introduction-socials li a {
  font-size: 1.4rem;
  color: black;
}

.about-me {
  margin-top: 4.8rem;
}

.about-me p {
  color: var(--text-primary);
  font-size: 1.8rem;
}

.about-me p a {
  color: black;
}
</style>
