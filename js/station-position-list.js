window.addEventListener("load", function () {
  const selectedPosition = document.querySelector(".selected-position");
  const stationList = document.querySelector(".station-list");
  const station = document.querySelectorAll(".station-list li");
  console.log(station);
  let nowBt = false;
  //클릭 시 리스트 창 열기
  selectedPosition.addEventListener("click", function () {
    const openList = () => {
      nowBt = true;
      stationList.classList.add("station-list-active");
      selectedPosition.innerHTML = "<span>강남역</span><i>▴</i> ";
    };
    const closeList = () => {
      nowBt = false;
      stationList.classList.remove("station-list-active");
      selectedPosition.innerHTML = "<span>강남역</span><i>▾</i>";
    };
    nowBt === false ? openList() : closeList();
  });
});
