const newsData = [
  {
    id: 1,
    title: "news1",
    description: "this is description",
    content: "content is here",
    image: "../assets/images/news/news1.jpg",
    date: "2024-09-01",
    author: "Dr. Jane Smith",
  },
  {
    id: 2,
    title: "News2",
    description:
      "A leading tech company has unveiled its latest innovation, set to change the industry landscape.",
    image: "../assets/images/news/news2.jpg",
    date: "2024-08-30",
    author: "John Doe",
  },
  {
    id: 3,
    title: "news3",
    description:
      "A leading tech company has unveiled its latest innovation, set to change the industry landscape.",

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
            <p class="news__description">${article.description}</p>
        </div>
       
    `;

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
