window.addEventListener("load", function () {
  const stationListWrap = document.querySelector(".station-list");
  const stationList = document.querySelectorAll(".station-list li");
  const stationBtn = document.querySelector(".selected-position");
  const stationBtnNameTag = document.querySelector(".selected-position span");
  const stationBtnArrowTag = document.querySelector(".selected-position i");

  let stationSlide = new Swiper(".station-slide", {
    slidesPerView: 2,
    grid: {
      rows: 3,
    },
    navigation: {
      nextEl: ".station-slide .next-button",
      prevEl: ".station-slide .prev-button",
    },
  });

  let showList = false;
  let clickedStation;

  const STATION_POSITION_URL = (_metro = "metro-1") => `/apis/${_metro}.json`;

  const getData = async (_metro) => {
    try {
      const res = await fetch(STATION_POSITION_URL(_metro));
      const data = await res.json();
      const ArrayData = data.positions;
      const htmlContentArr = ArrayData.map((item) => {
        return `<div class="swiper-slide station-container">
                  <a href="#" class="statinon-box">
                    <div class="station-thum">
                      <div class="station-img">
                        <img src=${item.title_img.origin} alt="역세권 포지션" />
                      </div>
                    </div>
                    <div class="station-info">
                      <div class="station-job-name">
                        ${item.position}
                      </div>
                      <div class="station-position-company">${
                        item.company.name
                      }</div>
                      <div class="station-position-etc">${
                        item.address.location
                      } ${item.address.district}·${
          item.career.annual_from
            ? item.career.annual_to >= 100
              ? `경력 ${item.career.annual_from}년 이상`
              : `경력 ${item.career.annual_from}-${item.career.annual_to}년`
            : `신입-경력 ${item.career.annual_to}년`
        }</div>
                    </div>
                  </a>
                  <i class="xi-bookmark-o station-bookmark"></i>
                </div>`;
      });
      const htmlContent = htmlContentArr.join("");
      const staionJobWraper = document.querySelector(
        ".station-slide .station-constainer-set "
      );
      staionJobWraper.innerHTML = htmlContent;
      if (stationSlide) {
        stationSlide.update();
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();

  const openList = () => {
    showList = true;
    stationListWrap.classList.add("station-list-active");
    stationBtnArrowTag.innerHTML = "▴";
  };
  const closeList = () => {
    showList = false;
    stationListWrap.classList.remove("station-list-active");
    stationBtnArrowTag.innerHTML = "▾";
  };
  const changeName = (item) => {
    stationBtnNameTag.innerHTML = item.target.innerHTML;
  };

  // 버튼 클릭 시 리스트 팝업
  stationBtn.addEventListener("click", function () {
    showList === false ? openList() : closeList();
  });

  stationList.forEach((item, index) => {
    // 리스트 버튼 클릭 시,
    item.addEventListener("click", (item) => {
      // 1. 리스트 끄기
      closeList();
      // 2. 버튼 이름 변경하기
      changeName(item);

      // 눌렀던 메뉴와 다른 메뉴들이 같은가?
      // console.log(item.target);
      clickedStation = item.target.innerHTML;

      stationList.forEach((item, index) => {
        if (item.innerHTML === clickedStation) {
          item.classList.add("station-active");
          item.classList.remove("station");
        } else {
          item.classList.add("station");
          item.classList.remove("station-active");
        }
      });
      console.log(item.target.id);
      STATION_POSITION_URL(item.target.id);
      console.log(STATION_POSITION_URL(item.target.id));
      getData(item.target.id);
    });
  });
});
