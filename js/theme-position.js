window.addEventListener("load", function () {
  const POPULAR_JOB_DATA_URL = "/apis/popular-job.json";

  const getData = async () => {
    try {
      const res = await fetch(POPULAR_JOB_DATA_URL);
      const data = await res.json();
      const ArrayData = data.positions;
      const htmlContentArr = ArrayData.map((item) => {
        return `<a href="#" class="swiper-slide theme-position-wrap">
                  <div class="theme-position-img">
                    <img src="./images/23.webp" alt="테마 이미지" />
                  </div>
                  <div class="theme-position-info">
                    <div class="theme-position-title">
                      커리어의 시작, 인턴 포지션
                    </div>
                    <span class="theme-position-company">인턴</span>
                  </div>
                </a>`;
      });
      const htmlContent = htmlContentArr.join("");
      const themePositionWraper = document.querySelector(
        ".theme-position-container "
      );
      themePositionWraper.innerHTML = htmlContent;
    } catch (error) {
      console.log(error);
    }
  };
  getData();
});
