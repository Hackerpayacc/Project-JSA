const prs = document.getElementById("Container");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let generateShop = () => {
  for (let key in trangtriData) {
    let search = basket.find((x) => x.ID == trangtriData[key].id) || [];
    prs.innerHTML += `<div id="product-id-1" class="single-product">
      <img src="${trangtriData[key].image}">
      <div class="pr-content">
            <h5 class="product-name">${trangtriData[key].name}</h5>
            <h6><b>Price:</b>${trangtriData[key].price}</h6>
            <div class="buttons">
                <i onclick="decrement(${
                  trangtriData[key].id
                })" class="fa-solid fa-minus"></i>
                <div id="${trangtriData[key].id}" class="quantity">${
      search.item === undefined ? 0 : search.item
    }</div>
                <i onclick="increment(${
                  trangtriData[key].id
                })" class="fa-solid fa-plus"></i>
            </div>
            <button onclick="increment(${
              trangtriData[key].id
            })">Thêm vào giỏ hàng</button>
        </div>
    </div>`;
  }
};
generateShop();
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
