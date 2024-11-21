window.addEventListener('load', () => {
  const CARD_NEWS_DATA_URL = '/apis/card-news.json';
  fetch(CARD_NEWS_DATA_URL)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      let htmlCard = '';
      for (let i = 0; i < result.length; i++) {
        const tag = `<div class="swiper-slide card-news-box">
                  <a href="${result[i].link}" class="card-news">
                    <div class="card-news-img">
                      <img src="${result[i].imgpath}" alt="${result[i].alt}" />
                    </div>
                    <div class="card-news-info">
                      <div class="card-news-title">
                        ${result[i].title}
                      </div>
                      <div class="card-news-text">
                      ${result[i].news}
                      </div>
                    </div>
                  </a>
                </div>`;
        htmlCard += tag;
      }
      const cardNewsContainer = document.querySelector('.card-news-container');
      console.log(cardNewsContainer);
      cardNewsContainer.innerHTML = htmlCard;
    })
    .catch((error) => {});
});
