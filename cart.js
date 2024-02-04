const ShoppingCart = document.querySelector(".Shopping-Cart");
const totalBill = document.querySelector("#total");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateCartItems = () => {
  if (basket.length !== 0) {
    let total = 0;
    ShoppingCart.innerHTML = null;
    for (let key in basket) {
      for (let i in monanData) {
        if (basket[key].ID == monanData[i].id) {
          total += monanData[i].price * basket[key].item;

          let search = basket.find((x) => x.ID == monanData[i].id) || [];
          ShoppingCart.innerHTML += `
                  <div class="single-prs-bill">
                  <div id="product-id-${
                    monanData[i].id
                  }" class="single-product">
                      <img src="${monanData[i].image}">
                      <div class="pr-content">
                          <h5 class="product-name">${
                            monanData[i].name
                          }</span>(x${search.item})</h5>
            
                          <h5>${monanData[i].price}</h5>
                          <div class="buttons">
                              <i onclick="decrement(${
                                monanData[i].id
                              })" class="fa-solid fa-minus"></i>
                              <div id="${monanData[i].id}" class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
                              <i onclick="increment(${
                                monanData[i].id
                              })" class="fa-solid fa-plus"></i>
                          </div>
                          <div class="Delete">
                              <i class="fa-solid fa-x"></i>
                              <p onclick="removeItems(${
                                monanData[i].id
                              })">Delete</p>
                          </div>
                      </div>
                  </div>
              </div>
                  `;
        }
      }

      for (let i in caycanhData) {
        if (basket[key].ID == caycanhData[i].id) {
          total += caycanhData[i].price * basket[key].item;
          let search = basket.find((x) => x.ID == caycanhData[i].id) || [];
          ShoppingCart.innerHTML += `
              <div class="single-prs-bill">
              <div id="product-id-${caycanhData[i].id}" class="single-product">
                  <img src="${caycanhData[i].image}">
                  <div class="pr-content">
                      <h5 class="product-name">${caycanhData[i].name}</span>(x${
            search.item
          })</h5>

                      <h5>${caycanhData[i].price}</h5>
                      <div class="buttons">
                          <i onclick="decrement(${
                            caycanhData[i].id
                          })" class="fa-solid fa-minus"></i>
                          <div id="${caycanhData[i].id}" class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
                          <i onclick="increment(${
                            caycanhData[i].id
                          })" class="fa-solid fa-plus"></i>
                      </div>
                      <div class="Delete">
                          <i class="fa-solid fa-x"></i>
                          <p onclick="removeItems(${
                            caycanhData[i].id
                          })">Delete</p>
                      </div>
                  </div>
              </div>
          </div>
              `;
        }
      }
      for (let i in trangtriData) {
        if (basket[key].ID == trangtriData[i].id) {
          total += trangtriData[i].price * basket[key].item;
          let search = basket.find((x) => x.ID == trangtriData[i].id) || [];
          ShoppingCart.innerHTML += `
              <div class="single-prs-bill">
              <div id="product-id-${trangtriData[i].id}" class="single-product">
                  <img src="${trangtriData[i].image}">
                  <div class="pr-content">
                      <h5 class="product-name">${
                        trangtriData[i].name
                      }</span>(x${search.item})</h5>

                      <h5>${trangtriData[i].price}</h5>
                      <div class="buttons">
                          <i onclick="decrement(${
                            trangtriData[i].id
                          })" class="fa-solid fa-minus"></i>
                          <div id="${trangtriData[i].id}" class="quantity">${
            search.item === undefined ? 0 : search.item
          }</div>
                          <i onclick="increment(${
                            trangtriData[i].id
                          })" class="fa-solid fa-plus"></i>
                      </div>
                      <div class="Delete">
                          <i class="fa-solid fa-x"></i>
                          <p onclick="removeItems(${
                            trangtriData[i].id
                          })">Delete</p>
                      </div>
                  </div>
              </div>
          </div>
              `;
        }
      }
    }
    totalBill.innerHTML = ShoppingCart.innerHTML;
    totalBill.innerHTML += `
      <h1 style="color: red"> Thành tiền: <span style="color: green">${total} VNĐ</span></h1>
    `;
  } else {
    ShoppingCart.innerHTML = null;
    ShoppingCart.innerHTML = `
    <h1>Cart is empty</h1>
    <a href="index.html">
    <button class = "Homebtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let search = basket.find((x) => x.ID === id);
  if (search === undefined) {
    basket.push({
      ID: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));
  update(id);
};

let decrement = (id) => {
  let search = basket.find((x) => x.ID === id);
  if (search === undefined) return;
  if (search.item === 0) {
    return;
  } else {
    search.item -= 1;
  }
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.ID === id);
  document.getElementById(id).innerHTML = search.item;
  generateCartItems();
  Calculation();
};

let Calculation = () => {
  const cartIcon = document.getElementById("cartAmount");
  let S = 0;
  for (let i in basket) {
    S += basket[i].item;
  }
  cartIcon.innerHTML = S;
};
Calculation();
