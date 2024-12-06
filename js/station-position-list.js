window.addEventListener("load", function () {
  const stationListWrap = document.querySelector(".station-list");
  const stationList = document.querySelectorAll(".station-list li");
  const stationBtn = document.querySelector(".selected-position");
  const stationBtnNameTag = document.querySelector(".selected-position span");
  const stationBtnArrowTag = document.querySelector(".selected-position i");

  let showList = false;
  let checked = false;

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

  // 버튼 클릭 시 리스트 팝업
  stationBtn.addEventListener("click", function () {
    showList === false ? openList() : closeList();
  });

  stationList.forEach((item, index) => {
    const clickedStationName = item.innerHTML;
    // 리스트 버튼 클릭 시,
    item.addEventListener("click", () => {
      // 1. 리스트 끄기
      closeList();
      // 2. 버튼 내 innerHTML 변경시키기
      stationBtnNameTag.innerHTML = clickedStationName;
    });
  });
});
