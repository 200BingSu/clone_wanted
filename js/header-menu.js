window.addEventListener('load', function () {
  // ul header-menu-wrap
  // li header-menu
  const allMenu = document.querySelectorAll('.header-menu');
  const allMenuArray = Array.from(allMenu);
  const menu = document.querySelector('.header-menu');
  allMenu.forEach(function (menu) {
    menu.addEventListener('click', function () {
      const selectedMenu = this;
      const otherMenu = allMenuArray.filter(function (menu) {
        return menu !== selectedMenu;
      });
      console.log('고른 메뉴: ', selectedMenu);
      console.log('나머지: ', otherMenu);
      const menuLink = document.querySelector('.header-menu-link');
      otherMenu.forEach(function (menu) {
        menuLink.classList.add('menu-active');
      });
    });
  });
});
