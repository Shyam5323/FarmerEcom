import products from "./cartList.js";
const tableBody = document.querySelector("#cart tbody");

products.forEach((product) => {
  const row = document.createElement("tr");

  const removeCell = document.createElement("td");
  removeCell.innerHTML = '<i class="far fa-times-circle"></i>';

  const imageCell = document.createElement("td");
  const image = document.createElement("img");
  image.src = "img/products/" + product.image_src[0];
  image.alt = product.name;
  imageCell.appendChild(image);

  const nameCell = document.createElement("td");
  nameCell.textContent = product.name;

  const priceCell = document.createElement("td");
  priceCell.textContent = "Rs. " + product.price.toFixed(2);

  const quantityCell = document.createElement("td");
  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = 1;
  quantityCell.appendChild(quantityInput);

  const subtotalCell = document.createElement("td");
  subtotalCell.textContent = "Rs. " + product.price.toFixed(2);

  // Append all cells to the row
  row.appendChild(removeCell);
  row.appendChild(imageCell);
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(quantityCell);
  row.appendChild(subtotalCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
