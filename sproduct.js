import products from "./data.js";
import cartList from "./cartList.js";
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const product = products.find((item) => item.id === productId);

console.log(product);
const productDetailsContainer = document.getElementById("prodetails");
console.log(productDetailsContainer);
const imageSection = document.createElement("div");
imageSection.classList.add("single-pro-image");
const mainImg = document.createElement("img");
mainImg.src = "img/products/" + product.image_src[0];
mainImg.alt = product.name;
mainImg.style.width = "100%";
mainImg.id = "MainImg";

imageSection.appendChild(mainImg);

const smallImgGroup = document.createElement("div");
smallImgGroup.classList.add("small-image-group");

product.image_src.forEach((src) => {
  const smallImgColDiv = document.createElement("div");
  smallImgColDiv.classList.add("small-img-col");

  const smallImg = document.createElement("img");
  smallImg.src = "img/products/" + src;
  smallImg.alt = product.name;
  smallImg.style.width = "100%";
  smallImg.classList.add("small-img");

  smallImgColDiv.appendChild(smallImg);

  smallImgGroup.appendChild(smallImgColDiv);
});
imageSection.appendChild(smallImgGroup);
console.log(imageSection);

productDetailsContainer.appendChild(imageSection);

const detailSection = document.createElement("div");
detailSection.classList.add("single-pro-details");
const homeText = document.createElement("h6");
homeText.textContent = "Home / Seeds";

const productName = document.createElement("h4");
productName.textContent = product.name;

const productPrice = document.createElement("h2");
productPrice.textContent = product.price + " Rs.";

const sizeSelect = document.createElement("select");
const sizeOptions = ["Select size", "X", "S"];
sizeOptions.forEach((optionText) => {
  const option = document.createElement("option");
  option.textContent = optionText;
  sizeSelect.appendChild(option);
});

const quantityInput = document.createElement("input");
quantityInput.type = "number";
quantityInput.value = "1";

const addToCartButton = document.createElement("button");
addToCartButton.textContent = "Add to cart";
addToCartButton.classList.add("normal");

const productDetailsTitle = document.createElement("h4");
productDetailsTitle.textContent = "Product Details";

const productDetailsText = document.createElement("span");
productDetailsText.textContent = product.description;
detailSection.appendChild(homeText);
detailSection.appendChild(productName);
detailSection.appendChild(productPrice);
detailSection.appendChild(sizeSelect);
detailSection.appendChild(quantityInput);
detailSection.appendChild(addToCartButton);
detailSection.appendChild(productDetailsTitle);
detailSection.appendChild(productDetailsText);

productDetailsContainer.appendChild(detailSection);

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  MainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  MainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  MainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  MainImg.src = smallImg[3].src;
};

addToCartButton.addEventListener("click", function () {
  const quantity = parseInt(quantityInput.value);

  if (quantity > 0) {
    const productCopy = Object.assign({}, product);

    productCopy.amount = quantity;

    console.log(productCopy);

    addToCart(productCopy);

    alert("Item added to cart");
  } else {
    alert("Please select a valid quantity");
  }
});

function addToCart(product) {
  const existingProductIndex = cartList.findIndex(
    (item) => item.id === product.id
  );

  if (existingProductIndex !== -1) {
    cartList[existingProductIndex].amount += product.amount;
  } else {
    cartList.push(product);
  }
  localStorage.setItem("cartList", JSON.stringify(cartList));
}
