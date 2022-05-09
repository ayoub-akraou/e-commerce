"use strict";
const iconMenu = document.querySelector(".icon-menu");
const iconClose = document.querySelector(".icon-close");
const menu = document.querySelector(".menu");
const products = document.querySelector(".products");
const filters = document.querySelector(".filters");
const tags = document.querySelector(".tags");
const arrProducts = [];
// Product Class Prototype
class Product {
  constructor(type, img, description, price) {
    this.type = type;
    this.img = img;
    this.description = description;
    this.price = price;
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
function createProduct(product, type, img, description, price) {
  product = new Product(type, img, description, price);
  arrProducts.push(product);
}
// display products in the DOM
function displayHTML(product) {
  products.insertAdjacentHTML(
    "beforeend",
    `
    <figure class="product" data-type="${product.type}" title="${this.description}">
    <div class="image">
      <img src="images/${product.img}.jpg" alt="img" class="" />
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
  "t-shirts",
  "t-shirt1",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199"
);
// product 4
createProduct(
  "product4",
  "hoodies",
  "hoodie1",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259"
);
// product 2
createProduct(
  "product2",
  "t-shirts",
  "t-shirt2",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199"
);
// product 3
createProduct(
  "product3",
  "t-shirts",
  "t-shirt3",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199"
);
// product 5
createProduct(
  "product5",
  "hoodies",
  "hoodie2",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259"
);
// product 6
createProduct(
  "product6",
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
          // [...products.children].forEach((a) => {
          //   if (a.getAttribute("data-type") === e.textContent.toLowerCase()) {
          //     a.classList.add("opacity-100");
          //   }
          // });
          // x.classList.add("opacity-100");
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
