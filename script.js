"use strict";
const tilte = document.querySelector(".title");
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const products = document.querySelector(".products");
const filters = document.querySelector(".filters");
const tags = document.querySelector(".tags");
const arrProducts = [];
// Product Class Prototype
class Product {
  constructor(id, type, img1, description, price, img2, img3) {
    this.id = id;
    this.type = type;
    this.img1 = img1;
    this.description = description;
    this.price = price;
    this.img2 = img2;
    this.img3 = img3;
  }
}
// burger menu icon functionnality
iconMenu.addEventListener("click", function () {
  menu.classList.remove("-translate-x-full");
});
// close icon functionnality
iconClose.addEventListener("click", function () {
  menu.classList.add("-translate-x-full");
});
// create products object data
function createProduct(product, id, type, img1, description, price) {
  product = new Product(id, type, img1, description, price);
  arrProducts.push(product);
}
// display products in the DOM
function displayHTML(product) {
  products.classList.add("grid");
  products.insertAdjacentHTML(
    "beforeend",
    `
    <figure class="product" id="${product.id}" data-type="${product.type}" title="${this.description}">
    <div class="image">
    <img src="images/${product.img1}.jpg" alt="img" class="" />
    <div class="icon__heart--bg">
    <svg
    class="icon-heart"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-heart"
    >
    <path
    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    ></path>
    </svg>
    </div>
    </div>
    <figcaption class="product__description">
    ${product.description}
    </figcaption>
    <strong class="product__price"><span class= " currency">MAD</span>${product.price}</strong>
    </figure>
    
    `
  );
}
function display(product) {
  displayHTML = displayHTML.bind(product);
  displayHTML(product);
}
// product 1
createProduct(
  "product1",
  "1",
  "t-shirts",
  "t-shirt1",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199"
);
// product 4
createProduct(
  "product4",
  "4",
  "hoodies",
  "hoodie1",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259"
);
// product 2
createProduct(
  "product2",
  "2",
  "t-shirts",
  "t-shirt2",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199"
);
// product 3
createProduct(
  "product3",
  "3",
  "t-shirts",
  "t-shirt3",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199"
);
// product 5
createProduct(
  "product5",
  "5",
  "hoodies",
  "hoodie2",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259"
);
// product 6
createProduct(
  "product6",
  "6",
  "hoodies",
  "hoodie3",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259"
);
// initialization
const init = () => {
  products.innerHTML = "";
  arrProducts.forEach((e) => display(e));
  [...products.children].forEach((x) => {
    x.classList.add("opacity-100");
  });
};
init();
// filter fuctionnality
function filter(e) {
  e = e.target;
  if (e.localName === "button") {
    // remove active state from any button
    [...filters.children].forEach((x) =>
      x.classList.remove("filter__btn--active")
    );
    if (e.textContent.toLowerCase() === "all") {
      init();
      [...filters.children].forEach((x) =>
        x.textContent.toLowerCase() === "all"
          ? x.classList.add("filter__btn--active")
          : ""
      );
    } else {
      [...filters.children].forEach((x) =>
        x.textContent.toLowerCase() === e.textContent.toLowerCase()
          ? x.classList.add("filter__btn--active")
          : ""
      );
      products.innerHTML = "";
      arrProducts.forEach((x) => {
        if (x.type === e.textContent.toLowerCase()) {
          display(x);
        }
      });
    }
  }
}
filters.addEventListener("click", filter);
tags.addEventListener("click", filter);
tags.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
});
// display wide vue product details
function displayWideVue(product) {
  tilte.classList.add("hidden");
  products.classList.remove("grid");
  products.innerHTML = `
  <article class="show-product">
  <div class="product__images overflow-x-scroll flex snap-mandatory snap-x">
  <img
  class="snap-start object-cover min-w-full max-h-[80vh]"
  src="images/${product.img1}.jpg"
  alt=""
  />
  <img
  class="snap-start object-cover min-w-full max-h-[80vh]"
  src="images/${product.img1}.jpg"
  alt=""
  />
  <img
  class="snap-start object-cover min-w-full max-h-[80vh]"
  src="images/${product.img1}.jpg"
  alt=""
  />
  </div>
  <div class="product__data pt-8 pb-4">
  <figcaption
  class="w-product__description text-[1.8rem] leading-relaxed"
  >
  ${product.description}
  </figcaption>
  <div class="price w-fit ml-auto">
  <del
  class="px-4 py-4 text-[1.6rem] rounded-xl bg-red-50 text-gray-500/90"
  ><span class="price__currency text-[1.2rem]">MAD</span
  ><strong class="font-medium">${Math.ceil(
    +product.price + 0.1 * +product.price
  )}</strong></del
    >
    <p
    class="w-product__price inline-block w-fit px-4 py-2 rounded-xl text-[1.8rem] bg-gray-100 text-red-600"
    >
    <span class="price__currency text-[1.4rem]">MAD</span
    ><strong class="font-medium">${product.price}</strong>
    </p>
    </div>
    <div class="product-size mb-4">
    <label
    for="size-select"
    class="mb-2 font-medium text-[1.4rem] uppercase"
    >size:</label
    >
    <select
    class="w-full p-3 text-[1.6rem] border-[1px] border-black border-solid"
    name="sizes"
    id="size-select"
    aria-label=""
    >
    <option class="size-option" value="Please select">
    -- Please select --
    </option>
    <option value="S - small">S - small</option>
    <option value="M - medium">M - medium</option>
    <option value="L - large">L - large</option>
    <option value="XL - X-large">XL - X-large</option>
    <option value="XXL - XX-large">XXL - 2X-large</option>
    </select>
    </div>
    <fieldset class="product__colors">
          <legend class="text-[1.4rem] font-medium uppercase" for="color">
          color:
          </legend>
          <div class="colors__container flex gap-2">
          <div class="product__color w-8 h-8 bg-red-600"></div>
          <div class="product__color w-8 h-8 bg-black"></div>
          <div class="product__color w-8 h-8 bg-yellow-600"></div>
          <div class="product__color w-8 h-8 bg-blue-700"></div>
          </div>
          </fieldset>
          
          <button
          class="transition-transform tracking-wider active:translate-y-1 block w-full my-4 py-4 bg-blue-800 text-white text-[1.8rem] uppercase font-bold"
          type="submit"
          >
          checkout
          </button>
          <div class="delivery px-4 flex gap-6">
          <svg
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"
          />
          </svg>
          <div class="delivery__info text-[1.4rem]">
          <h3 class="uppercase font-bold tracking-wider">
          free* standard delivery
          </h3>
          <p class="description">
          Faster delivery available in
          <span class="capitalize font-medium text-[1.2rem]"
          >safi-Morocco</span
          >
          </p>
          </div>
          </div>
          </div>
          </article>
          `;
  // slider functionnality
  const silder = document.querySelector(".product__images");

  //  color selection
  const colors = document.querySelector(".colors__container");
  colors.addEventListener("click", function (e) {
    [...colors.children].forEach((x) =>
      x.classList.remove("product__color--active")
    );
    if (e.target.classList.contains("product__color")) {
      e.target.classList.add("product__color--active");
    }
  });
}
products.addEventListener("click", function (e) {
  e = e.target;
  const productId = e.closest(".product")?.id;
  if (
    !e.classList.contains("icon-heart") &&
    !e.classList.contains("products")
  ) {
    arrProducts.forEach((x) => {
      if (x.id === productId) {
        displayWideVue(x);
      }
    });
  } else {
    console.log("no");
  }
});
displayWideVue(arrProducts[2]);
