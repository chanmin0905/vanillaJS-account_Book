// JSON 파일 받아오기
fetch("https://eulsoo.github.io/generated_1.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].date);
    }
  });

// Swiper ------------------------------------------------------------
// 쓸어 넘기면 화면 전환

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// ------------------------------------------------------------

/*

1. JSON 배열의 길이를 찾는다. : 몇개의 div(spend_list)를 만들지 확인하기 위해
2. fetch를 이용해 배열의 길이를 구한다. : 배열의 길이는 10이다.
3. 찾은 배열의 길이만큼 새로운 div를 만든다. (for 문 사용? 함수 사용?)
4. 새로운 div에 className 도 넣어준다.
5. 새로운 div를 append 시켜준다. : html 상에 구조 안으로 위치함
6. CSS 입혀지는지 확인
7. 받아온 JSON에 있는 데이터 값을 입력!! => 언제 해야하는지 정확히 모르겠음.CSS
8. 

*/

// append 할 부모 Element
const spend_statusEl = document.querySelector(".spend_status");

const spend_listEl = document.createElement("div");
spend_listEl.classList.add("spend_list");
spend_statusEl.appendChild(spend_listEl);

const spend_titleEl = document.createElement("div");
spend_titleEl.classList.add("spend_title");
spend_listEl.appendChild(spend_titleEl);

const spend_itemsEl = document.createElement("div");
spend_itemsEl.classList.add("spend_items");
spend_listEl.appendChild(spend_itemsEl);

const spend_dayEl = document.createElement("span");
spend_dayEl.classList.add("spend_day");
spend_titleEl.appendChild(spend_dayEl);
spend_dayEl.textContent = "2022-09-01";

const spend_totalEl = document.createElement("span");
spend_totalEl.classList.add("spend_total");
spend_titleEl.appendChild(spend_totalEl);
spend_total.textContent = "133,000 지출";

const spend_itemEl = document.createElement("span");
spend_itemEl.classList.add("spend_item");
spend_itemsEl.appendChild(spend_itemEl);
spend_itemEl.textContent = "미스터피자";

const spend_priceEl = document.createElement("span");
spend_priceEl.classList.add("spend_price");
spend_itemsEl.appendChild(spend_priceEl);
spend_priceEl.textContent = "25,000";

console.log(spend_statusEl);

// const makeElement = function (el) {
//   const newEl = document.createElement(el);
//   newEl.textcontent = "새로 만들어졌음";
//   newEl.classList;
//   console.log(newEl);
// };

// makeElement("div");
