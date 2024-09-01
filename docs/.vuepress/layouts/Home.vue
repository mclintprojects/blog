<template>
  <div class="home page">
    <div class="introduction">
      <div>
        <img class="selfie" src="/images/mclint.jpg" />
        <h1>Clinton "Anwu" Mbah</h1>
        <p>Accra, Ghana 🇬🇭 &bull; The Internet</p>
        <ul class="introduction-socials">
          <li>
            <a href="https://twitter.com/mclint_" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/mclintprojects" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://vsco.co/mclint" target="_blank">VSCO</a>
          </li>
          <li>
            <a href="https://www.inprnt.com/gallery/mclint/" target="_blank">Inprnt</a>
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
          I am fortunate to be spending most of my time on what feels like my
          life's work — a startup that's building a
          <a href="https://blog.useaccrue.com/2023/06/09/the-accrue-master-plan/" target="_blank">USD-stablecoin agent
            network</a>
          for fast and cheap cross-border payments within Africa. Previously, I
          worked at
          <a href="https://helicarrier.studio" target="_blank">Helicarrier</a>
          on a range of consumer crypto products.
        </p>
        <p class="mt-2">
          I'm insatiably curious about technology, startups, crypto, art, games,
          and music. In my spare time, I love reading articles, essays,
          biographies, and novels. You might also find me exploring photography,
          jamming to Amapiano, EDM, House, or OSTs, gaming, working on
          personal projects, or painting portraits in Procreate.
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
  height: 96px;
  margin-bottom: 1.2rem;
  border-radius: 1rem;
}

.introduction h1 {
  text-transform: uppercase;
}

.introduction h1+p {
  text-transform: none;
  font-size: 1.4rem;
  margin-bottom: 0;
  text-transform: uppercase;
  color: var(--text-primary-light);
}

.introduction-socials {
  padding: 0;
  margin: 0;
  display: flex;
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid rgb(224, 224, 224);
}

.introduction-socials li {
  margin-right: 1.4rem;
  list-style-type: none;
}

.introduction-socials li a {
  font-size: 1.4rem;
  color: black;
  font-family: "Departure Mono", monospace;
  text-transform: uppercase;
}

.about-me {
  padding-bottom: 3.2rem;
}

.about-me p {
  color: var(--text-primary);
}

.about-me p a {
  color: black;
}
</style>
