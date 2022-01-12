const removebtn = document.getElementsByClassName('js-remove-product');
for (i = 0; i < removebtn.length; i++) {
  removebtn[i].addEventListener('click', removebtns)
}
function removebtns(event) {
  const e = event.target;
  const parents = e.parentElement.parentElement.parentElement.remove();

}

const addToCart = document.getElementsByClassName('products__item');
for (i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', addToCarts)
}
function addToCarts(event) {
  const addToCart = event.target;
  const addToCartEl = addToCart.parentElement.parentElement;
  // console.log(addToCartEl);
  const titlename = addToCartEl.children[0].innerText;
  const price = addToCartEl.children[1].innerText;

  addToCartUpdate(titlename, price);

}
const jsCartProducts = document.getElementsByClassName('cart')[0];
function addToCartUpdate(titlename, price) {
  const createElement = document.createElement('products');
  createElement.innerHTML =
    `
    <div class="row align-items-center products">
      <div class="col-auto w-60px">
      <div class="row align-items-center flex-column">
        <div class="col">
          <div class="row">
            <div class="quantity">
              <a href="#" class="quantity__plus" onclick = "incrementNumber()"><span>+</span></a>
              <input name="quantity" type="text" class="quantity__input" id="textbox" value="1">
              <a href="#" class="quantity__minus" onclick = "decrementNumber()"><span>-</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="text-truncate-2">Men's One and Only Textured Short Sleeve Button Up</div>
      <span class="span badge badge-inline badge-soft-secondary">Black</span>
    </div>
    <div class="col-auto">
      <div class="item-price">$190.000 x 1</div>
      <div class="total"><strong>$190.000</strong></div>
    </div>
    <div class="col-auto">
      <button type="button" class="btn btn-circle btn-delete-icon btn-sm ml-2 mr-0 ">
        <i class="fa fa-trash js-remove-product"></i>
      </button>
    </div>
    </div>`
  jsCartProducts.append(createElement);
  for (i = 0; i < removebtn.length; i++) {
    removebtn[i].addEventListener('click', removebtns)
  }
  for (i = 0; i < qtyUpdate.length; i++) {
    qtyUpdate[i].addEventListener('click', updateQty)
  }

}
function addProduct(e, price) {
  e.preventDefault();
  updateSubtotal(price);

}
function updateSubtotal(amount) {
  const subTotalField = document.getElementById('sub-total');
  const subTotal = subTotalField.innerText;
  let newSubTotal = (parseFloat(subTotal) + parseFloat(amount)).toFixed(3);
  subTotalField.innerText = newSubTotal;
}

