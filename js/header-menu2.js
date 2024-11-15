window.addEventListener("load", function () {
  const headerMenu = document.querySelectorAll(".header-menu");
  console.log(headerMenu);

  headerMenu.forEach((menu, index) => {
    const selectedMenu = menu.addEventListener("mouseover", function () {
      console.log("선택 메뉴", index);
    });
  });
});
