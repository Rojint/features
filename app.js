const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.onclick = function () {
  search.classList.toggle("active");
};

// function clear() {
//   document.getElementById("mysearch").reset();
//   console.log(1);
// }
