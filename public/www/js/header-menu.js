window.addEventListener("load", function () {
  // 메뉴목록(li)
  const menuList = document.querySelectorAll(".header-menu");

  let selectedMenuIndex;

  function select(index) {
    menuList.forEach(function (menu, i) {
      if (i === index) {
        menu.classList.add("header-menu");
        menu.classList.remove("menu-active");
      } else {
        menu.classList.add("menu-active");
        menu.classList.remove("header-menu");
      }
    });
  }

  function resetMenu() {
    // 모든 메뉴에서 클래스 제거
    menuList.forEach((menu) => {
      menu.classList.add("header-menu");
      menu.classList.remove("menu-active");
    });
  }

  // 내가 선택한 메뉴의 selectedMenuIndex를 select()함수의 기준으로 사용
  menuList.forEach(function (menu, index) {
    menu.addEventListener("mouseenter", function () {
      selectedMenuIndex = index;
      console.log("고른 메뉴", selectedMenuIndex);
      select(selectedMenuIndex);
    });
    menu.addEventListener("mouseleave", function () {
      resetMenu();
    });
  });
});
