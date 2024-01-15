<template>
  <div class="home page">
    <div class="introduction">
      <div>
        <h1>Clinton "Anwu" Mbah</h1>
        <p>
          I'm a programmer that *really likes* design. Also: hobbyist
          photographer & digital portrait artist. &bull; 🇬🇭
        </p>
        <ul class="introduction-socials">
          <li>
            <a href="twitter.com/mclint_">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/mclintprojects">GitHub</a>
          </li>
          <li>
            <a href="https://vsco.co/mclint">VSCO</a>
          </li>
          <li>
            <a href="https://www.inprnt.com/gallery/mclint/">Inprnt</a>
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
          within Africa. I think it'll be a game-changer for African
          cross-border commerce by the end of this decade.
        </p>
        <p class="mt-2">
          In my free time, I enjoy writing about things I'm ruminating on,
          reading essays (science, business, technology, productivity, life, and
          love), (auto) biographies, and (non) fiction novels. You can also find
          me working on small apps & games or painting portraitures in
          Procreate.
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
  font-family: "Inter", sans-serif;
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
