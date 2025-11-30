const shoulderBagLink = document.querySelector(
  ".main_navication a:nth-child(2)"
);

shoulderBagLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "./pruductList.html";
});
