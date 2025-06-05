const extensionList = document.querySelector(".extensions-list");

// const data = fetch('../data.json')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Failed to load JSON');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach(finalData => {
//       const picture =` <div class="main">
//         <div class="img-para">
//           <div><img src=" alt="" /></div>
//           <div>
//             <h3>hgfghjkjh</h3>
//             <p>sdfghgfergh</p>
//           </div>
//         </div>
//         <div class="rem-toggle">
//           <div><button>Remove</button></div>
//             <label class="toggle-switch">
//               <input type="checkbox" />
//               <span class="slider"></span>
//             </label>
//         </div>
//       </div>`
//   })
//   .catch((error) => {
//     console.error(error);
//   });


//  <div class="main">
//         <div class="img-para">
//           <div><img src="../assets/images/logo-dom-snapshot.svg" alt="" /></div>
//           <div>
//             <h3>hgfghjkjh</h3>
//             <p>sdfghgfergh</p>
//           </div>
//         </div>
//         <div class="rem-toggle">
//           <div><button>Remove</button></div>
//             <label class="toggle-switch">
//               <input type="checkbox" />
//               <span class="slider"></span>
//             </label>
//         </div>
//       </div>


async function getData() {
  const res = await fetch("../data.json");
  const finalData = await res.json();

  finalData.forEach((data) => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    mainDiv.innerHTML =`
      <div class="img-para">
          <div><img src="${data.logo}" alt="image" /></div>
          <div>
            <h3>${data.name}</h3>
            <p>${data.description}</p>
          </div>
        </div>
        <div class="rem-toggle">
          <div><button>Remove</button></div>
            <label class="toggle-switch">
              <input type="checkbox" class = "toggle-btn"/>
              <span class="slider"></span>
            </label>
        </div>
      `
    extensionList.append(mainDiv);
    console.log(data.isActive);
  });

}
getData();
