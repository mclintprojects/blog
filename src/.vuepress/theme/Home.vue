<template>
  <div class="home page">
    <div class="introduction">
      <div>
        <img class="selfie" src="/images/selfie-large.png" />
        <h1>Clinton "Anwu" Mbah</h1>
        <p>
          Accra, Ghana 🇬🇭 &bull; The Internet
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
          I'm a computer programmer currently focused on building delightful &
          impactful consumer products.
        </p>
        <p class="mt-2">
          I currently spend most of my time making progress on my
          <a href="https://useaccrue.com">life's work</a> — a startup building a
          stablecoin
          <a href="https://cashramp.co/commerce">agent network</a> for fast and
          cheap cross-border payments within Africa.
        </p>
        <p class="mt-2">
          By the end of this decade, my personal mission is to deliver the most
          delightful way for Africans to access all the utility available to
          them in crypto.
        </p>
        <p class="mt-2">
          I'm insatiably curious about technology, startups, crypto, art, games,
          and music. In my free time, I'm usually writing about things I'm
          ruminating on or reading articles, essays, biographies, and novels.
          You might also find me exploring photography as a hobby, vibing to
          Amapiano/EDM/House/OSTs, playing video games, working on personal
          products & games or painting portraits in Procreate.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.selfie {
  height: 150px;
  margin-bottom: 1.2rem;
  border-radius: 1.6rem;
}

.introduction h1 + p {
  text-transform: none;
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 0;
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
  font-size: 1.6rem;
}

.about-me p a {
  color: black;
}
</style>
