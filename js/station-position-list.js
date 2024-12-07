window.addEventListener("load", function () {
  const stationListWrap = document.querySelector(".station-list");
  const stationList = document.querySelectorAll(".station-list li");
  const stationBtn = document.querySelector(".selected-position");
  const stationBtnNameTag = document.querySelector(".selected-position span");
  const stationBtnArrowTag = document.querySelector(".selected-position i");

  let showList = false;
  let clickedStation;

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
      console.log("클릭한 역:", clickedStation);
      stationList.forEach((item, index) => {
        console.log(item);
        if (item.innerHTML === clickedStation) {
          item.classList.add("station-active");
          item.classList.remove("station");
        } else {
          item.classList.add("station");
          item.classList.remove("station-active");
        }
      });
    });
  });
});
