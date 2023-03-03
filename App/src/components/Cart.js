
export default function Cart() {
    return(
        <a href="cart">
            <i aria-hidden="true" className="fas fa-cart-shopping" title="My Cart"></i>
            <span className="sr-only">My Cart</span>
        </a>
    );
}


//Methods for the cart

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }



//var removeCartItemButtons = document.getElementByClassName("");



var addToCartButtons = document.getElementsByClassName("add-to-cart");

console.log("this is not working");

for(var i = 0; i < addToCartButtons.length; i++) 
{
    var button = addToCartButtons[i];
    button.addEventListener('click', function() {
        console.log("click");
        console.log(button.parentElement.parentElement.parentElement.id);
    })
}


//This will add the visual cart row
function addCartRow(){

}

//updates the price of all the items in the cart
function updateCartTotal()
{

}