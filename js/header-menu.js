<<<<<<< HEAD
window.addEventListener('load', function () {
  // 메뉴목록(li)
  const menuList = document.querySelectorAll('.header-menu');
  console.log(menuList);

  let selectedMenuIndex;

  function select(index) {
    menuList.forEach(function (menu, i) {
      if (i === index) {
        menu.classList.add('header-menu');
        menu.classList.remove('menu-active');
      } else {
        menu.classList.add('menu-active');
        menu.classList.remove('header-menu');
      }
    });
  }

  function resetMenu() {
    // 모든 메뉴에서 클래스 제거
    menuList.forEach((menu) => {
      menu.classList.add('header-menu');
      menu.classList.remove('menu-active');
    });
  }

  // 내가 선택한 메뉴의 selectedMenuIndex를 select()함수의 기준으로 사용
  menuList.forEach(function (menu, index) {
    menu.addEventListener('mouseenter', function () {
      selectedMenuIndex = index;
      console.log('고른 메뉴', selectedMenuIndex);
      select(selectedMenuIndex);
    });
    menu.addEventListener('mouseleave', function () {
      resetMenu();
=======
window.addEventListener("load", function () {
  // ul header-menu-wrap
  // li header-menu
  const allMenu = document.querySelectorAll(".header-menu");
  // const allMenuArray = Array.from(allMenu);
  const menu = document.querySelector(".header-menu");
  allMenu.forEach(function (menu) {
    menu.addEventListener("mouseenter", function (event) {
      const selectedMenu = event.target;
      const otherMenu = allMenuArray.filter(function (menu) {
        return menu !== selectedMenu;
      });
      console.log("고른 메뉴: ", selectedMenu);
      console.log("나머지: ", otherMenu);
      otherMenu.forEach(function (menu) {
        menu.classList.remove("header-menu");
        menu.classList.add("menu-active");
      });
      selectedMenu.classList.remove("menu-active");
    });
  });
  allMenuArray.forEach(function (menu) {
    menu.addEventListener("mouseleave", function () {
      allMenuArray.forEach(function (menu) {
        menu.classList.remove("menu-active");
        menu.classList.add("header-menu");
      });
>>>>>>> 6d32e2ac8769405f58a10e98530ac7226558e838
    });
  });
});
