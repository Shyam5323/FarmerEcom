import products from "./data.js";

const productContainer = document.getElementById("pro-container");

function handleProductClick(productId) {
  window.location.href = `sproduct.html?id=${productId}`;
}

function displayProducts(pageNumber) {
  productContainer.innerHTML = "";

  const startIndex = (pageNumber - 1) * 4;

  const endIndex = startIndex + 4;

  const currentPageProducts = products.slice(startIndex, endIndex);

  currentPageProducts.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("pro");

    const img = document.createElement("img");
    img.src = "img/products/" + product.image_src[0];
    img.alt = product.name;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("des");

    const brandSpan = document.createElement("span");
    brandSpan.textContent = product.brand;

    const nameH5 = document.createElement("h5");
    nameH5.textContent = product.name;

    const starDiv = document.createElement("div");
    starDiv.classList.add("star");
    for (let i = 0; i < product.stars; i++) {
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      starDiv.appendChild(starIcon);
    }

    const priceH4 = document.createElement("h4");
    priceH4.textContent = product.price + "Rs.";

    const cartLink = document.createElement("a");
    cartLink.href = "#";
    const cartIcon = document.createElement("i");
    cartIcon.classList.add("fa-solid", "fa-cart-shopping", "cart");
    cartLink.appendChild(cartIcon);

    descriptionDiv.appendChild(brandSpan);
    descriptionDiv.appendChild(nameH5);
    descriptionDiv.appendChild(starDiv);
    descriptionDiv.appendChild(priceH4);

    productDiv.appendChild(img);
    productDiv.appendChild(descriptionDiv);
    productDiv.appendChild(cartLink);
    productDiv.addEventListener("click", function () {
      handleProductClick(product.id);
    });

    productContainer.appendChild(productDiv);
  });
}

displayProducts(1);

function showPage(pageNumber) {
  displayProducts(pageNumber);
}

document.getElementById("page1").addEventListener("click", function () {
  showPage(1);
});

document.getElementById("page2").addEventListener("click", function () {
  showPage(2);
});
