"use strict";
const title = document.querySelector(".title");
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
    this.img2 = img2 || img1; // Use img1 as fallback
    this.img3 = img3 || img1; // Use img1 as fallback
    this.description = description;
    this.price = price;
  }
}

// Burger menu icon functionality with smooth transition
iconMenu.addEventListener("click", function () {
  menu.classList.remove("translate-x-full");
  menu.classList.add("menu-open");
  // Add overlay to background when menu is open
  document.body.classList.add("menu-active");
});

// Close icon functionality with smooth transition
iconClose.addEventListener("click", function () {
  menu.classList.add("translate-x-full");
  menu.classList.remove("menu-open");
  // Remove overlay from background when menu is closed
  document.body.classList.remove("menu-active");
});

// Add to wishlist with improved animation
function addToWishlist() {
  const iconHeart = document.querySelectorAll(".icon-heart");
  iconHeart.forEach((x) =>
    x.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent opening product detail
      x.classList.toggle("icon__heart--active");

      // Add a pulse animation
      x.classList.add("heart-pulse");
      setTimeout(() => {
        x.classList.remove("heart-pulse");
      }, 300);
    })
  );
}

// Create products object data
function createProduct(
  product,
  id,
  type,
  img1,
  description,
  price,
  img2,
  img3
) {
  product = new Product(id, type, img1, description, price, img2, img3);
  arrProducts.push(product);
}

// Display products in the DOM with improved styling
function displayHTML(product) {
  products.classList.add("grid");
  products.insertAdjacentHTML(
    "beforeend",
    `
    <figure class="product transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden" id="${product.id}" data-type="${product.type}" title="${product.description}">
      <div class="image relative overflow-hidden group">
        <img src="images/${product.img1}.jpg" alt="${product.description}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="icon__heart--bg absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-sm">
          <svg
            class="icon-heart w-6 h-6 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              class="icon-path"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            ></path>
          </svg>
        </div>
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p class="text-white text-sm">Quick View</p>
        </div>
      </div>
      <figcaption class="product__description p-3 text-gray-800 line-clamp-2 h-14">
        ${product.description}
      </figcaption>
      <div class="px-3 pb-3 flex justify-between items-center">
        <strong class="product__price text-lg"><span class="currency text-sm text-gray-500">MAD</span> ${product.price}</strong>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">${product.type}</span>
      </div>
    </figure>
    `
  );
}

function display(product) {
  displayHTML = displayHTML.bind(product);
  displayHTML(product);
}

// Create products with multiple images
createProduct(
  "product1",
  "1",
  "t-shirts",
  "t-shirt1",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199",
  "t-shirt1-alt",
  "t-shirt1-back"
);

createProduct(
  "product4",
  "4",
  "hoodies",
  "hoodie1",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259",
  "hoodie1-alt",
  "hoodie1-back"
);

createProduct(
  "product2",
  "2",
  "t-shirts",
  "t-shirt2",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199",
  "t-shirt2-alt",
  "t-shirt2-back"
);

createProduct(
  "product3",
  "3",
  "t-shirts",
  "t-shirt3",
  "Covrlge Men Short Sleeve T-shirt Fashion Milk Printed O-neck Tshirt Men's Stars T Shirts Casual Male Brand Tops Tees MTS292",
  "199",
  "t-shirt3-alt",
  "t-shirt3-back"
);

createProduct(
  "product5",
  "5",
  "hoodies",
  "hoodie2",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259",
  "hoodie2-alt",
  "hoodie2-back"
);

createProduct(
  "product6",
  "6",
  "hoodies",
  "hoodie3",
  "Mens Hoodies - Men Fashion Hoodie Manufacturer from Erode",
  "259",
  "hoodie3-alt",
  "hoodie3-back"
);

// Initialization with animation
const init = () => {
  products.innerHTML = "";
  arrProducts.forEach((e, index) => {
    setTimeout(() => {
      display(e);
      const lastChild = products.lastElementChild;
      lastChild.classList.add("opacity-0");
      setTimeout(() => {
        lastChild.classList.replace("opacity-0", "opacity-100");
      }, 50);
    }, index * 100); // Stagger the animations
  });
  addToWishlist();
};

init();

// Filter functionality with improved animation
const distance = filters.getBoundingClientRect().top;

function filter(e) {
  title.classList.remove("hidden");
  e = e.target;
  if (e.localName === "button") {
    // Smooth scroll to filters
    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });

    // Remove active state from any button
    [...filters.children].forEach((x) =>
      x.classList.remove("filter__btn--active")
    );

    // Fade out current products
    [...products.children].forEach((product) => {
      product.classList.add("opacity-0", "transition-opacity", "duration-300");
    });

    setTimeout(() => {
      if (e.textContent.toLowerCase() === "all") {
        init();
        [...filters.children].forEach((x) =>
          x.textContent.toLowerCase() === "all"
            ? x.classList.add("filter__btn--active")
            : ""
        );
      } else {
        [...filters.children].forEach((x) =>
          x.textContent.toLowerCase() === e.textContent.toLowerCase().trim()
            ? x.classList.add("filter__btn--active")
            : ""
        );
        products.innerHTML = "";

        // Filter and display matching products with staggered animation
        const filteredProducts = arrProducts.filter(
          (x) => x.type === e.textContent.toLowerCase().trim()
        );

        filteredProducts.forEach((product, index) => {
          setTimeout(() => {
            display(product);
            const lastChild = products.lastElementChild;
            lastChild.classList.add("opacity-0");
            setTimeout(() => {
              lastChild.classList.replace("opacity-0", "opacity-100");
            }, 50);
          }, index * 100);
        });

        // Show "No products found" message if no matches
        if (filteredProducts.length === 0) {
          products.innerHTML = `
            <div class="col-span-full text-center py-10">
              <svg class="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 class="mt-4 text-lg font-medium text-gray-900">No products found</h3>
              <p class="mt-1 text-gray-500">Try selecting a different category.</p>
            </div>
          `;
        }

        addToWishlist();
      }
    }, 300);
  }
}

filters.addEventListener("click", filter);
tags.addEventListener("click", filter);
tags.addEventListener("click", () => {
  menu.classList.add("translate-x-full");
  document.body.classList.remove("menu-active");
});

// Display wide view product details with improved styling and functionality
// function displayWideVue(product) {
//   title.classList.add("hidden");

//   // Smoothly fade out products
//   products.style.opacity = "0";
//   products.style.transition = "opacity 0.3s ease";

//   setTimeout(() => {
//     products.classList.remove("grid");
//     products.innerHTML = `
//     <article class="show-product mx-auto">
//       <div class="product__images relative overflow-hidden">
//         <div class="product-slider flex snap-mandatory snap-x overflow-x-scroll scroll-smooth">
//           <img id="0"
//             class="snap-start object-cover min-w-full max-h-[80vh]"
//             src="images/${product.img1}.jpg"
//             alt="${product.description}"
//           />
//           <img id="1"
//             class="snap-start object-cover min-w-full max-h-[80vh]"
//             src="images/${product.img2}.jpg"
//             alt="${product.description}"
//           />
//           <img id="2"
//             class="snap-start object-cover min-w-full max-h-[80vh]"
//             src="images/${product.img3}.jpg"
//             alt="${product.description}"
//           />
//         </div>
        
//         <div class="bullets items-end h-fit sticky top-[calc(100%-1rem)] right-0 min-w-full flex justify-center py-2 bg-white/60 gap-5 backdrop-blur-sm">
//           <button class="bullet bullet--active w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"></button>
//           <button class="bullet w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"></button>
//           <button class="bullet w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"></button>
//         </div>
        
//         <button class="absolute top-4 left-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors" id="back-to-products">
//           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//         </button>
//       </div>
      
//       <div class="product__data pt-8 pb-4 px-4 md:px-0">
//         <div class="mb-2 text-sm font-medium text-blue-600 uppercase">${
//           product.type
//         }</div>
//         <figcaption
//           class="w-product__description mb-4 text-[1.8rem] leading-relaxed font-medium text-gray-800"
//         >
//           ${product.description}
//         </figcaption>
        
//         <div class="price flex items-center gap-4 mb-6">
//           <p
//             class="w-product__price inline-block w-fit px-4 py-2 rounded-xl text-[1.8rem] bg-blue-50 text-blue-700 font-bold"
//           >
//             <span class="price__currency text-[1.4rem] text-blue-500">MAD</span> ${
//               product.price
//             }
//           </p>
//           <del
//             class="px-3 py-2 text-[1.2rem] rounded-xl bg-red-50 text-gray-500/90"
//           >
//             <span class="price__currency text-[1rem]">MAD</span>
//             <strong class="font-medium">${Math.ceil(
//               +product.price + 0.1 * +product.price
//             )}</strong>
//           </del>
//           <span class="text-red-500 text-sm font-medium">10% OFF</span>
//         </div>
        
//         <div class="product-size mb-6">
//           <label
//             for="size-select"
//             class="mb-2 block font-medium text-[1.4rem] uppercase text-gray-700"
//           >Size:</label>
//           <select
//             class="sizes w-full p-3 text-[1.6rem] border-[1px] border-gray-300 border-solid rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
//             name="sizes"
//             id="size-select"
//             aria-label="Select size"
//             required
//           >
//             <option class="size-option" value="Please select">
//               -- Please select --
//             </option>
//             <option value="S - small">S - small</option>
//             <option value="M - medium">M - medium</option>
//             <option value="L - large">L - large</option>
//             <option value="XL - X-large">XL - X-large</option>
//             <option value="XXL - XX-large">XXL - 2X-large</option>
//           </select>
//         </div>
        
//         <fieldset class="product__colors mb-6">
//           <legend class="text-[1.4rem] font-medium uppercase text-gray-700 mb-2">
//             Color:
//           </legend>
//           <div class="colors__container flex gap-3">
//             <div data-color="red" class="product__color w-12 h-12 rounded-full bg-red-600 cursor-pointer border-2 border-transparent hover:border-gray-300 transition-all flex items-center justify-center"></div>
//             <div data-color="black" class="product__color w-12 h-12 rounded-full bg-black cursor-pointer border-2 border-transparent hover:border-gray-300 transition-all flex items-center justify-center"></div>
//             <div data-color="orange" class="product__color w-12 h-12 rounded-full bg-yellow-600 cursor-pointer border-2 border-transparent hover:border-gray-300 transition-all flex items-center justify-center"></div>
//             <div data-color="blue" class="product__color w-12 h-12 rounded-full bg-blue-700 cursor-pointer border-2 border-transparent hover:border-gray-300 transition-all flex items-center justify-center"></div>
//           </div>
//         </fieldset>
        
//         <button
//           class="btn__checkout tracking-wider active:translate-y-[1.5px] block w-full my-6 py-4 bg-blue-700 hover:bg-blue-800 text-white text-[1.8rem] uppercase font-bold rounded-lg transition-colors shadow-lg"
//           type="submit"
//         >
//           Pay Now
//         </button>
        
//         <div class="delivery p-4 flex gap-6 bg-gray-50 rounded-lg border border-gray-100">
//           <svg
//             width="40px"
//             height="40px"
//             viewBox="0 0 32 32"
//             xmlns="http://www.w3.org/2000/svg"
//             class="text-blue-700"
//           >
//             <path
//               fill="currentColor"
//               d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"
//             />
//           </svg>
//           <div class="delivery__info text-[1.4rem]">
//             <h3 class="uppercase font-bold tracking-wider text-blue-800">
//               Cash on Delivery - Free Service
//             </h3>
//             <p class="description text-gray-600">
//               Faster delivery available in
//               <span class="capitalize font-medium text-gray-800">Safi-Morocco</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </article>
//     `;

//     // Fade in the product details
//     products.style.opacity = "1";

//     // Color selection with improved UI
//     const colors = document.querySelector(".colors__container");
//     colors.addEventListener("click", function (e) {
//       if (e.target.classList.contains("product__color")) {
//         [...colors.children].forEach((x) => {
//           x.classList.remove("product__color--active");
//           x.innerHTML = "";
//         });
//         e.target.classList.add("product__color--active");
//         e.target.classList.add("border-gray-800");

//         // Add a checkmark to the selected color
//         e.target.innerHTML = `
//           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
//           </svg>
//         `;
//       }
//     });

//     // Slider functionality
//     const slider = document.querySelector(".product-slider");
//     const bullets = document.querySelectorAll(".bullet");

//     // Make bullets clickable
//     bullets.forEach((bullet, index) => {
//       bullet.addEventListener("click", function () {
//         const images = document.querySelectorAll(".product-slider img");
//         images[index].scrollIntoView({ behavior: "smooth", inline: "start" });
//       });
//     });

//     slider.addEventListener("scroll", function () {
//       const images = document.querySelectorAll(".product-slider img");
//       const sliderWidth = slider.offsetWidth;

//       images.forEach((x, index) => {
//         const imgLeft = x.getBoundingClientRect().left;
//         const sliderLeft = slider.getBoundingClientRect().left;

//         if (Math.abs(imgLeft - sliderLeft) < 50) {
//           bullets.forEach((bullet) =>
//             bullet.classList.remove("bullet--active")
//           );
//           bullets[index].classList.add("bullet--active");
//         }
//       });
//     });

//     // Back button functionality
//     const backButton = document.getElementById("back-to-products");
//     backButton.addEventListener("click", function () {
//       products.style.opacity = "0";
//       setTimeout(() => {
//         init();
//         title.classList.remove("hidden");
//         products.style.opacity = "1";
//       }, 300);
//     });

//     // Send WhatsApp message
//     const productName = document
//       .querySelector(".w-product__description")
//       .textContent.trim();
//     const checkout = document.querySelector(".btn__checkout");

//     checkout.addEventListener("click", function () {
//       // Size selection
//       const size = document.querySelector(".sizes").value;

//       // Color selection
//       const color = document
//         .querySelector(".product__color--active")
//         ?.getAttribute("data-color");

//       // Form validation with visual feedback
//       if (size === "Please select") {
//         document
//           .querySelector(".sizes")
//           .classList.add("border-red-500", "bg-red-50");
//         return;
//       }

//       if (!color) {
//         document
//           .querySelector(".colors__container")
//           .classList.add("border", "border-red-500", "p-2", "rounded");
//         return;
//       }

//       const url = `https://wa.me/0601856921?text= 
//       name: ${productName}%0a
//       size: ${size}%0a
//       color: ${color}`;

//       window.open(url, "_blank").focus();
//     });
//   }, 300);
// }

// Wide view product with improved event delegation
products?.addEventListener("click", function (e) {
  const clicked = e.target;
  const productCard = clicked.closest(".product");

  if (!productCard) return;

  const productId = productCard.id;

  if (
    !clicked.closest(".icon-heart") &&
    !clicked.classList.contains("icon-path")
  ) {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    arrProducts.forEach((x) => {
      if (x.id === productId) {
        // displayWideVue(x);
      }
    });
  }
});

// Add CSS for new animations and styling
const styleEl = document.createElement("style");
styleEl.textContent = `
  .product {
    transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  }
  
  .product:hover {
    transform: translateY(-5px);
  }
  
  .icon__heart--active {
    fill: #e53e3e;
    stroke: #e53e3e;
  }
  
  .heart-pulse {
    animation: heartPulse 0.3s ease;
  }
  
  @keyframes heartPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
  
  .bullet--active {
    width: 12px;
    height: 12px;
    background-color: #2563eb;
  }
  
  .product__color--active {
    border-color: #1e40af !important;
    transform: scale(1.1);
  }
  
  .menu-open {
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }
  
  .menu-active::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 40;
    opacity: 1;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  @media (min-width: 640px) {
    .products.grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }
  
  @media (min-width: 768px) {
    .products.grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .products.grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
document.head.appendChild(styleEl);
