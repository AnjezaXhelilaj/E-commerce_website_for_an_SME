/* Shopping Cart and Add to cart button */

if(document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded", ready)
} else{
  ready()
}

function ready(){
  var removeCartItemButtons = document.getElementsByClassName("bi bi-trash")
  console.log(removeCartItemButtons)
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input")
  for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener("change", quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName("bi bi-cart")
  for (var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener("click", addToCartClicked)
  }

  document.getElementById("purchase").addEventListener("click", purchaseClicked)
}

function purchaseClicked(){
  alert("Faleminderit per porosine tuaj!")
  var cartItems = document.getElementsByClassName("cart-items")[0]
  while(cartItems.hasChildNodes()){
    cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event){
   var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartTotal()
}

function addToCartClicked(event){
  var button = event.target
  var shopItem = button.parentElement
  var title =  shopItem.getElementsByClassName("shop-item-title")[0].innerText
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
  var imgSrc = shopItem.getElementsByClassName("shop-item-img")[0].src 
  addItemToCart(title, price, imgSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imgSrc){
  var cartRow = document.createElement("div")
  cartRow.classList.add("cart-row")
  var cartItems = document.getElementsByClassName("cart-items")[0]
  var cartItemsNames = cartItems.getElementsByClassName("cart-item-title")
  for(var i = 0; i < cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
      alert("Ky artikull eshte i shtuar ne shporte")
      return
    }
  }
  var cartRowContents = `
            <div class="cart-item cart-column">
              <img src="${imgSrc}" alt="">
              <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column cart-item-price">${price}</span>
            <div class="cart-item cart-column">
              <input class="cart-quantity-input" type="number" value="1"></td>
              <i class="bi bi-trash"></i>
            </div> `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName("bi bi-trash")[0].addEventListener("click", removeCartItem)
  cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)
}

function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName("cart-items")[0]
  var cartRows = cartItemContainer.getElementsByClassName("cart-row")
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName("cart-price")[0]
    var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
    var price = priceElement.innerText.replace(" ALL", " ")
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  document.getElementsByClassName("cart-total-price")[0].innerText = total + " ALL" 
}
