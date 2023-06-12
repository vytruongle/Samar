function getEle(res) {
  return document.querySelector(res);
}

getEle(".header-menu__md-icon").addEventListener("click", () => {
  if (getEle(".header-menu__list-md").classList.contains("active")) {
    return getEle(".header-menu__list-md").classList.remove("active");
  } else {
    return getEle(".header-menu__list-md").classList.add("active");
  }
});
