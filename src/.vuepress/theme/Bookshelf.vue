<template>
  <div class="bookshelf page">
    <h1>Bookshelf</h1>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <a :href="book.link" target="_blank">
          <p class="book-title">{{ book.title }}</p>
          <p>View &rarr;</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          title: "Steve Jobs",
          link: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
        },
        {
          title: "Elon Musk",
          link: "https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281/ref=pd_bxgy_d_sccl_1/146-2272486-1533704?pd_rd_i=1982181281&psc=1",
        },
        {
          title: "Ajayi Crowther: The Truimphs and Travails of a Legend",
          link: "https://bookcraftafrica.com/single/view/13",
        },
        {
          title: "China Road",
          link: "https://www.amazon.com/China-Road-Journey-Future-Rising/dp/0812975243",
        },
        {
          title: "Meditations",
          link: "https://www.amazon.com/Meditations-Marcus-Aurelius/dp/1503280462",
        },
      ],
    };
  },
};
</script>

<style>
.bookshelf ul {
  margin: 0;
  margin-top: 3.2rem;
}

.bookshelf ul li {
  list-style-type: none;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid rgb(241, 241, 241);
  padding-bottom: 1.6rem;
}

.bookshelf ul li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.bookshelf ul li a {
  text-decoration: none;
}

.book-title {
  color: var(--text-primary);
  font-weight: bold;
  font-size: 1.8rem;
}

.book-title + p {
  color: var(--text-primary-light);
}
</style>
