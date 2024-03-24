const savedCartList = JSON.parse(localStorage.getItem("cartList"));

let cartList = [];

if (savedCartList) {
  cartList = savedCartList;
} else {
  cartList = [];
}

export default cartList;
