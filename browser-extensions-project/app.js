const extensionList = document.querySelector(".extensions-list");
let allData = [];

// 1. fetch data from data.json

async function getData() {
  const res = await fetch("../data.json");
  const finalData = await res.json();
  allData = finalData;
  displayItem(allData);
}

// 2. display the data on screen

const displayItem = (dataArray) => {
  dataArray.forEach((data, index) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    mainDiv.innerHTML = `
      <div class="img-para">
          <div><img src="${data.logo}" alt="image" /></div>
          <div>
            <h3>${data.name}</h3>
            <p>${data.description}</p>
          </div>
        </div>
        <div class="rem-toggle">
          <div><button onclick ='removeItem(${index})'>Remove</button></div>
            <label class="toggle-switch">
              <input type="checkbox" class ="toggle-btn" ${
                data.isActive ? "checked" : ""
              }/>
              <span class="slider"></span>
            </label>
        </div>
      `;

       const checkbox = mainDiv.querySelector(".toggle-btn");

    // Add event listener for the checkbox
    checkbox.addEventListener("change",()=>{
      data.isActive = checkbox.checked;
    });

    extensionList.appendChild(mainDiv);
  });
};

const filter = (value) => {
  let buttons = document.querySelectorAll(".button-value");

  buttons.forEach((button) => {
    if (value.toLowerCase() === button.innerText.toLowerCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let cards = document.querySelectorAll(".main");

  cards.forEach((card) => {
    if (value === "all") {
      card.classList.remove("hide");
    } else if (card.classList.contains(value)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
};

getData();

const activeFilter = document.querySelector("#active");
activeFilter.addEventListener('click',()=>{
  extensionList.innerHTML ="";
  if(allData.isActive ===true){
    extensionList.innerHTML=``
  }
})

