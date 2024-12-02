window.addEventListener("load", function () {
  const selectedPosition = document.querySelector(".selected-position");
  const stationList = document.querySelector(".station-list");
  const station = document.querySelectorAll(".station-list li");

  let nowBt = false;
  let checkedStation = "강남역";

  //클릭 시 리스트 창 열기
  selectedPosition.addEventListener("click", function () {
    const openList = () => {
      nowBt = true;
      stationList.classList.add("station-list-active");
      selectedPosition.innerHTML = `<span>${checkedStation}</span><i>▴</i> `;
    };
    const closeList = () => {
      nowBt = false;
      stationList.classList.remove("station-list-active");
      selectedPosition.innerHTML = `<span>${checkedStation}</span><i>▾</i>`;
    };
    nowBt === false ? openList() : closeList();
  });

  //버튼 클릭 시, checkedStation 변수 변경
  station.map((item, index)=>{
    return ()
  })
});
