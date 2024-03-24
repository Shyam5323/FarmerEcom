import products from "./data.js";

const productContainer = document.getElementById("pro-container");

function handleProductClick(productId) {
  window.location.href = `sproduct.html?id=${productId}`;
}

products.slice(0, 8).forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("pro");

  const img = document.createElement("img");
  img.src = "img/products/" + product.image_src[0];
  img.alt = product.name;

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("des");

  const brandSpan = document.createElement("span");
  brandSpan.textContent = product.brand;

  // Create h5 for product name
  const nameH5 = document.createElement("h5");
  nameH5.textContent = product.name;

  // Create star div
  const starDiv = document.createElement("div");
  starDiv.classList.add("star");
  for (let i = 0; i < product.stars; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fas", "fa-star");
    starDiv.appendChild(starIcon);
  }

  // Create h4 for price
  const priceH4 = document.createElement("h4");
  priceH4.textContent = product.price + "Rs.";

  // Create cart link
  const cartLink = document.createElement("a");
  cartLink.href = "#";
  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid", "fa-cart-shopping", "cart");
  cartLink.appendChild(cartIcon);

  // Append elements to description div
  descriptionDiv.appendChild(brandSpan);
  descriptionDiv.appendChild(nameH5);
  descriptionDiv.appendChild(starDiv);
  descriptionDiv.appendChild(priceH4);

  // Append elements to product div
  productDiv.appendChild(img);
  productDiv.appendChild(descriptionDiv);
  productDiv.appendChild(cartLink);

  productDiv.addEventListener("click", function () {
    handleProductClick(product.id);
  });

  productContainer.appendChild(productDiv);
});
