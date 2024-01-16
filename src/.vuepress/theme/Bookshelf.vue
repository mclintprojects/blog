<template>
  <div class="bookshelf page">
    <h1>Bookshelf</h1>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <a :href="book.link">{{ book.title }}</a>
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
