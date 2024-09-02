const newsData = [
  {
    id: 1,
    title: "news1",
    description: `In a groundbreaking move, world leaders gathered today at the Global Climate Summit to unveil an ambitious plan aimed at significantly reducing greenhouse gas emissions over the next decade. The conference, attended by representatives from over 190 countries, marks a pivotal moment in the international effort to combat climate change and transition towards a sustainable future.The centerpiece of the summit's agenda was the announcement of a new international accord, dubbed the "Climate Action Pact," which sets forth stringent targets for carbon reduction and renewable energy adoption. The pact calls for participating nations to achieve net-zero emissions by 2050, with interim milestones set for 2030 and 2040 to ensure progress is on track. Key components of the agreement include commitments to phase out coal-fired power plants, invest heavily in solar and wind energy, and implement robust carbon pricing mechanisms.Prominent leaders, including the President of the United States, the Chancellor of Germany, and the Prime Minister of India, delivered impassioned speeches underscoring the urgency of the climate crisis. They highlighted the devastating impacts of extreme weather events, such as the record-breaking heatwaves, wildfires, and floods that have ravaged communities worldwide. These leaders emphasized that the cost of inaction far outweighs the investments required to shift to a low-carbon economy.Environmental advocates and scientists have largely praised the new pact, calling it a significant step forward. However, they have also warned that the true test will be in the implementation of these commitments. "This agreement is a major victory for the planet, but the real challenge lies ahead," said Dr. Elena Martinez, a leading climate scientist at the International Institute for Climate Research. "Governments must not only meet their targets but also hold each other accountable to ensure that we stay on the path to net-zero."In addition to the government pledges, the summit also saw major announcements from the private sector. Several multinational corporations, including leading tech firms and automotive companies, pledged to achieve carbon neutrality in their operations by 2035. A coalition of financial institutions, managing over $30 trillion in assets, committed to aligning their portfolios with the goals of the Paris Agreement, steering capital away from fossil fuels and towards green investments.Critics, however, have voiced concerns about the feasibility of the targets, particularly for developing nations that rely heavily on fossil fuels for economic growth. To address these concerns, the pact includes provisions for financial aid and technology transfer to support the transition in lower-income countries. A new $100 billion fund was established to help these nations build renewable energy infrastructure and adapt to the impacts of climate change, such as rising sea levels and shifting agricultural zones.As the summit concluded, the sense of optimism was palpable, but so too was the recognition of the monumental task ahead. Experts agree that while the Climate Action Pact represents a historic step forward, the clock is ticking, and the window for averting the most catastrophic effects of climate change is rapidly closing. The world will be watching closely as nations return home to implement their pledges and turn commitments into concrete actions.The coming months and years will be crucial in determining whether this renewed global effort can steer the planet away from the brink and secure a livable future for generations to come. For now, the commitments made at the Global Climate Summit offer a glimmer of hope in the fight against one of the greatest challenges of our time.`,
    content:
      "In a stunning breakthrough, scientists at the Large Hadron Collider have discovered evidence of a new fundamental particle. This particle, tentatively named the 'X boson', could help explain some of the most puzzling aspects of quantum mechanics and potentially bridge the gap between quantum theory and general relativity. The implications of this discovery are far-reaching and could lead to a complete overhaul of our current understanding of physics...",
    image: "../assets/images/news/news1.jpg",
    date: "2024-09-01",
    author: "Dr. Jane Smith",
  },
  {
    id: 2,
    title: "News2",
    description:
      "A leading tech company has unveiled its latest innovation, set to change the industry landscape.",
    content:
      "In a highly anticipated event, TechCorp unveiled its newest product, the 'NeuroLink', a brain-computer interface that promises to revolutionize how we interact with technology. The NeuroLink is a small, wireless device that can be implanted directly into the brain, allowing users to control devices and access information simply by thinking. While the technology is still in its early stages, early demonstrations have shown incredible potential, from allowing paralyzed individuals to control prosthetic limbs to enabling direct brain-to-brain communication...",
    image: "../assets/images/news/news2.jpg",
    date: "2024-08-30",
    author: "John Doe",
  },
  {
    id: 3,
    title: "news3",
    description:
      "A leading tech company has unveiled its latest innovation, set to change the industry landscape.",
    content:
      "In a highly anticipated event, TechCorp unveiled its newest product, the 'NeuroLink', a brain-computer interface that promises to revolutionize how we interact with technology. The NeuroLink is a small, wireless device that can be implanted directly into the brain, allowing users to control devices and access information simply by thinking. While the technology is still in its early stages, early demonstrations have shown incredible potential, from allowing paralyzed individuals to control prosthetic limbs to enabling direct brain-to-brain communication...",
    image: "../assets/images/news/news2.jpg",
    date: "2024-08-30",
    author: "John Doe",
  },
];

function createNewsCard(article) {
  const newsCard = document.createElement("div");
  newsCard.className = "news__card";
  newsCard.innerHTML = `
  <div class="news__thumbnail__wrapper"> 
        <img src="${article.image}" alt="${article.title}" >
        </div>
        <div class="news__content" > 
            <h2 class="news__title">${article.title}</h2>
            <p class="news__date">${article.date}</p>
            <p class="news__description">${article.content}</p>
        </div>
       
    `

  newsCard.addEventListener("click", () => {
    window.location.href = `newsdetail.html?id=${article.id}`;
  });

  return newsCard;
}

function showNewsList() {
  const newsList = document.querySelector(".news__cards");
  if (newsList) {
    newsData.forEach((article) => {
      newsList.appendChild(createNewsCard(article));
    });
  }
}

function showNewsDetail() {
  const newsDetail = document.querySelector(".news__detail");
  if (newsDetail) {
    const params = new URLSearchParams(window.location.search);
    const articleId = parseInt(params.get("id"));
    const article = newsData.find((news) => news.id === articleId);

    if (article) {
      newsDetail.innerHTML = `
          <h2>${article.title}</h2>
          <p class="author">By ${article.author} | ${article.date}</p>
          <img src="${article.image}" alt="${article.title}">
          <p>${article.description}</p>
          `;
    } else {
      newsDetail.innerHTML = `<p> news does not exist </p>`;
    }
  }
}

// Initialize the page
if (document.querySelector(".news__cards")) {
  showNewsList();
} else if (document.querySelector(".news__detail")) {
  showNewsDetail();
}
