// for home cards
data = `./data.json`;
var dataList = document.getElementById("data-list");
function digitalData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", data, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      // console.log(data);
      const digitalData = JSON.parse(this.responseText);
      let output = "";
      digitalData.forEach(function (item) {
        output += `
        <li>
            <img src="${item.image}" alt="${item.title}">
            <div class="text-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </li>
          `;
      });

      if (dataList) {
        dataList.innerHTML = output;
      }

      // dataList.innerHTML = output;
    }
  };
  xhr.send();
}
digitalData();

// for hamburger
const navToggle = document.querySelector(".hamburger");
const links = document.querySelector(".nav");
const hamFirst = document.querySelector(".first-bar");
const hamSec = document.querySelector(".sec-bar");
const hamLast = document.querySelector(".last-bar");

var elem = document.createElement("div");
elem.classList.add("overlay-div");
document.body.appendChild(elem);

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-nav");
  hamFirst.classList.toggle("first-bar-show");
  hamSec.classList.toggle("sec-bar-show");
  hamLast.classList.toggle("last-bar-show");
  elem.classList.toggle("overlay");
});
