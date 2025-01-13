window.addEventListener("load", function () {
  const addMenuBox = document.querySelector(".add-menu-box");
  const addmenuBtn = document.querySelector("#add-menu-btn");
  const submenuBg = document.querySelector(".submenu-bg");

  addmenuBtn.addEventListener("mouseenter", function () {
    addMenuBox.classList.add("add-menu-box-active");
    submenuBg.classList.add("submenu-bg-active");
  });
  addMenuBox.addEventListener("mouseleave", function () {
    addMenuBox.classList.remove("add-menu-box-active");
    submenuBg.classList.remove("submenu-bg-active");
  });
});
