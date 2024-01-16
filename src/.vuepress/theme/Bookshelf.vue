<template>
  <div class="bookshelf page">
    <h1>Bookshelf</h1>
    <p>
      A non-exhaustive list of the books I'm currently reading, plan to read or
      have read. If a book is listed here as read, I think highly of it.
    </p>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <a :href="book.link" target="_blank">
          <p class="book-title">{{ book.title }} &rarr;</p>
          <p>
            {{ statuses[book.status.toString()] }}
            <span v-if="book.status == 1">&bull; {{ book.year }}</span>
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
      books: [
        {
          title: "The Autobiography of MLK",
          link: "https://www.amazon.com/Autobiography-Martin-Luther-King-Jr/dp/0446676500",
          status: "-1",
        },
        {
          title: "The Psychology of Money",
          link: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
          status: "-1",
        },
        {
          title: "Outliers",
          link: "https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930",
          status: "-1",
        },
        {
          title: "Rework",
          link: "https://www.amazon.com/Rework-Jason-Fried/dp/0307463745",
          status: "-1",
        },
        {
          title: "The Springtime of Freedom",
          link: "https://www.amazon.com/Springtime-Freedom-Evolution-Developing-Societies/dp/0195009681",
          status: "-1",
        },
        {
          title: "I Forgot To Remember",
          link: "https://www.amazon.com/I-Forgot-Remember-Memoir-Amnesia/dp/1451685815",
          status: "-1",
        },
        {
          title: "Man's Search For Meaning",
          link: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273",
          status: "-1",
        },
        {
          title: "From Zero to Infinity",
          link: "https://www.amazon.com/Zero-Infinity-Numbers-Interesting-Spectrum/dp/0883855054",
          status: "-1",
        },
        {
          title: "I am the Nigerian Nation",
          link: "https://www.amazon.com/Am-Nigerian-Nation-1914-2007-Nigerias/dp/9789319665",
          status: "-",
        },
        {
          title: "The Design of Everyday Things",
          link: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654",
          status: "-1",
        },
        {
          title: "Sapiens: A Brief History Of Humankind",
          link: "https://www.amazon.com/Harari-Sapiens-History-Humankind-Paperback/dp/B08HGF699D",
          status: "-",
        },
        {
          title: "Long Walk to Freedom",
          link: "https://www.amazon.com/Long-Walk-Freedom-Autobiography-Mandela/dp/083120589X",
          status: 0,
        },
        {
          title: "Meditations",
          link: "https://www.amazon.com/Meditations-Marcus-Aurelius/dp/1503280462",
          status: 0,
        },
        {
          title: "Steve Jobs",
          link: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
          status: 1,
          year: 2024,
        },
        {
          title: "China Road",
          link: "https://www.amazon.com/China-Road-Journey-Future-Rising/dp/0812975243",
          status: 1,
          year: 2024,
        },
        {
          title: "Ajayi Crowther: The Truimphs and Travails of a Legend",
          link: "https://bookcraftafrica.com/single/view/13",
          status: 1,
          year: 2024,
        },
        {
          title: "Deep Work",
          link: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
          status: 1,
          year: 2024,
        },
        {
          title: "The Singapore Story: Memoirs of Lee Kuan Yew",
          link: "https://www.amazon.com/Singapore-Story-Student-Memoirs-Kuan-ebook/dp/B016JMZ7XC",
          status: "-",
          year: 2023,
        },
        {
          title: "Normal People",
          link: "https://www.amazon.com/Normal-People-Novel-Sally-Rooney/dp/1984822187",
          status: "-",
          year: 2023,
        },
        {
          title: "Einstein",
          link: "https://www.amazon.com/Einstein-Life-Universe-Walter-Isaacson/dp/0743264746",
          status: 0,
          year: 2023,
        },
        {
          title: "Elon Musk",
          link: "https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281",
          status: 1,
          year: 2023,
        },
        {
          title: "Born a Crime",
          link: "https://www.amazon.com/Born-Crime-Stories-African-Childhood/dp/0399588191",
          status: 1,
          year: 2023,
        },
        {
          title: "All About Love: New Visions",
          link: "https://www.amazon.com/All-About-Love-New-Visions/dp/0060959479",
          status: "-",
        },
        {
          title: "Venture Deals",
          link: "https://www.amazon.com/Venture-Deals-Smarter-Lawyer-Capitalist/dp/1119594820",
          status: "-",
        },
        {
          title: "The Bitcoin Standard",
          link: "https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861",
          status: "-",
        },
        {
          title: "Working Backwards",
          link: "https://www.amazon.com/Working-Backwards-Insights-Stories-Secrets/dp/1250267595",
          status: "-",
        },
        {
          title: "Life of Pi",
          link: "https://www.amazon.com/Life-Pi-Yann-Martel/dp/0156027321",
          status: "-",
        },
        {
          title: "Zero to One",
          link: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
          status: 1,
          year: 2022,
        },
        {
          title: "Judge's List",
          link: "https://www.amazon.com/Judges-List-Novel-Whistler/dp/0593157834",
          status: 1,
          year: 2022,
        },
        {
          title: "I'm Glad My Mom Died",
          link: "https://www.amazon.com/Im-Glad-My-Mom-Died/dp/1982185821",
          status: 1,
          year: 2022,
        },
        {
          title: "The Infinite Machine",
          link: "https://www.amazon.com/Infinite-Machine-Crypto-hackers-Building-Internet/dp/0062886142",
          status: 1,
          year: 2021,
        },
        {
          title: "The Night Tiger",
          link: "https://www.amazon.com/Night-Tiger-Novel-Yangsze-Choo/dp/1250175461",
          status: 1,
          year: 2022,
        },
        {
          title: "Flowers for Algernon",
          link: "https://www.amazon.com/Flowers-Algernon-Daniel-Keyes/dp/0156030306",
          status: 1,
          year: 2021,
        },
        {
          title: "The 6:20 Man",
          link: "https://www.amazon.com/6-20-Man-Thriller/dp/1538719851",
          status: 1,
          year: 2021,
        },
        {
          title: "Ender's Game",
          link: "https://www.amazon.com/Enders-Game-Ender-Quintet-1/dp/1250773024",
          status: 1,
          year: 2021,
        },
        {
          title: "Ready Player One",
          link: "https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/030788743X",
          status: 1,
          year: 2021,
        },
        {
          title: "Good Kids, Bad City",
          link: "https://www.amazon.com/Good-Kids-Bad-City-Conviction/dp/1250120233",
          status: 1,
          year: 2021,
        },
        {
          title: "American Assassin",
          link: "https://www.amazon.com/American-Assassin-Thriller-Mitch-Novel/dp/141659518X",
          status: 1,
          year: 2021,
        },
        {
          title: "The Girl Who Takes an Eye for an Eye",
          link: "https://www.amazon.com/Girl-Who-Takes-Eye-continuing/dp/0451494326",
          status: 1,
          year: 2021,
        },
        {
          title: "The Alice Network",
          link: "https://www.amazon.com/Alice-Network-Novel-Kate-Quinn/dp/0062654195",
          status: 1,
          year: 2021,
        },
        {
          title: "Camino Island",
          link: "https://www.amazon.com/Camino-Island-Novel-John-Grisham/dp/1524797146",
          status: 1,
          year: 2021,
        },
        {
          title: "The Great Alone",
          link: "https://www.amazon.com/Great-Alone-Novel-Kristin-Hannah/dp/1250229537",
          status: 1,
          year: 2021,
        },
        {
          title: "Fifty Fifty",
          link: "https://www.amazon.com/Fifty-Harriet-Blue-James-Patterson/dp/1538760665",
          status: 1,
          year: 2021,
        },
        {
          title: "An American Marriage",
          link: "https://www.amazon.com/American-Marriage-Novel-Tayari-Jones/dp/1616208686",
          status: 1,
          year: 2021,
        },
        {
          title: "Born on a Tuesday",
          link: "https://www.amazon.com/Born-Tuesday-Novel-Elnathan-John/dp/0802124828",
          status: 1,
          year: 2021,
        },
        {
          title: "Memoirs of a Geisha",
          link: "https://www.amazon.com/Memoirs-Geisha-Novel-Arthur-Golden/dp/0679781587",
          status: 1,
          year: 2021,
        },
        {
          title: "The Tattooist of Auschwitz",
          link: "https://www.amazon.com/Tattooist-Auschwitz-Novel-Heather-Morris/dp/0062797158",
          status: 1,
          year: 2021,
        },
        {
          title: "Where the Crawdads Sing",
          link: "https://www.amazon.com/Where-Crawdads-Sing-Delia-Owens/dp/0735219109",
          status: 1,
          year: 2021,
        },
        {
          title: "The Da Vinci Code",
          link: "https://www.amazon.com/Vinci-Code-Novel-Robert-Langdon-ebook/dp/B000FA675C",
          status: 1,
          year: 2021,
        },
        {
          title: "Animal Farm",
          link: "https://www.amazon.com/Animal-Farm-1984-George-Orwell/dp/0151010269",
          status: 1,
          year: 2021,
        },
        {
          title: "Chike and the River",
          link: "https://www.amazon.com/Chike-River-Chinua-Achebe/dp/0307473864",
          status: 1,
          year: 2021,
        },
        {
          title: "Bad Blood",
          link: "https://www.amazon.com/Bad-Blood-Secrets-Silicon-Startup/dp/0525431993",
          status: 1,
          year: 2020,
        },
        {
          title: "Super Pumped: The Battle for Uber",
          link: "https://www.amazon.com/Super-Pumped-Battle-Mike-Isaac/dp/0393358615",
          status: 1,
          year: 2020,
        },
      ],
      statuses: {
        "-": "Unfinished",
        "-1": "Unread",
        0: "Reading",
        1: "Read",
      },
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
