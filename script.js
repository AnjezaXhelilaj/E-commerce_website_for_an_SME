
/* Responsive sidebar menu */

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar) {
bar.addEventListener("click", () => {
    nav.classList.add("active");
    })
}

if(close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
        })
    }

/* Side shopping cart */

const shoppingCart = document.getElementById("bag");
const shoppingCartMobile = document.getElementById("bag-mobile");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart")

if(shoppingCart){
    shoppingCart.addEventListener("click", () =>{
        cart.classList.add("active");
    })
}

if(shoppingCartMobile){
    shoppingCartMobile.addEventListener("click", () =>{
        cart.classList.add("active");
    })
}

if(closeCart) {
    closeCart.addEventListener("click", () => {
        cart.classList.remove("active");
        })
    }

/* Redirect to the index.html page */

function myFunction() {
   window.location.href="index.html";
  }
  
