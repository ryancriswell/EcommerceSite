import React from "react";

class CartItem extends React.Component {
    render() {
        return <tr>
                <td className="cartItemImage">
                    <img src={this.props.imageSrc} alt={this.props.itemName} />
                </td>
                <td className="cartItemName">
                    {this.props.itemName}
                </td>
                <td className="cartItemQuantity">
                    {this.props.quantity}
                </td>
                <td className="cartItemSubtotal">
                    {this.props.quantity * this.props.price}
                </td>
            </tr>
    }
}
class CartTotal extends React.Component {
    render() {

        const tax = 1.08;
        let total = 0.0;
        for(let item of this.props.contents) {
            total += item.quantity * item.price;
        }
        let totalTaxed = (total * tax).toFixed(2);
        total = total.toFixed(2);
        return <>
                <tr className="total">
                    <td className="cartTotalName" colSpan={2}>Total:</td>
                    <td className="cartTotal">{"$" + total}</td>
                </tr>
                <tr className="total">
                    <td className="cartTotalName" colSpan={2}>(+tax)</td>
                    <td className="cartTotalWithTax">{"$" + totalTaxed}</td>
                </tr>
            </>
    }
}
class CartTable extends React.Component {
    render() {
        if (this.props.contents.length == 0) {
            return <div id="cartEmpty">
                <p>Empty - Grab some beans!</p>
            </div>
        } else {
            let rows = [];

            for(let item_key in this.props.contents) {
                let item = this.props.contents[item_key];
                rows.push(
                    <tr key={item_key}>
                        <td class="item">{item.itemName}</td>
                        <td class="price">{"$" + item.price}</td>
                        <td class="quantity">{item.quantity}</td>
                    </tr>
                );
            }
            return <table>
                <tr>
                    <th class="item">Item</th>
                    <th class="price">Price</th>
                    <th class="quantity">Qty.</th>
                </tr>
                {rows}
                <CartTotal contents={this.props.contents}/>
            </table>
        }
    }
}
export default function Cart(props) {
    let itemList = [];

    for(let item in props.cartItems) {
        itemList.push(
            {
                itemName: item,
                quantity: props.cartItems[item],
                price: 10.99,
            }
        );
    }

    /*TODO: Fetch cart list from DB
    const itemList = [
        {
            imageSrc: "images/Aztec-Bean.png",
            itemName: "Aztec Bean",
            quantity: 2,
            price: 9.49,
        },
        {
            imageSrc: "images/TheClassic-Bean.png",
            itemName: "The Classic",
            quantity: 1,
            price: 8.99,
        }
    ];*/

    const hide = (event) => {
        event.preventDefault();
        props.setCartShown(false);
    }

    let isEmpty = props.cartItems.length == 0;

    // prop.cartItems returns -> {"Aztez Bean":1,"Brazil Bean": 1}
    //let checkout = () => alert("Stub! " + JSON.stringify(props.cartItems));

    let cancel = () => props.setCartItems({});

    const checkout = (event) => {
        event.preventDefault();

        //choose what to do with the input data: email: "" and feedback: ""
        console.log(props.cartItems);


    // Request the list of items from the server
    
        fetch("/checkout", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(props.cartItems)
        })
    
    }


    return <div id="cart" className={props.cartShown ? "shown" : ""}>
        <h1>My Cart</h1>
        <a id="cart-close" onClick={hide} href="javascript:void()">
            <i aria-hidden="true" className="fas fa-xmark" title="Close"></i>
            <span className="sr-only">Close</span></a>
        <CartTable contents={itemList}/>
        <div class="buttons">
            <button id="cart-checkout" disabled={isEmpty} onClick={checkout}>Checkout</button>
            <button id="cart-cancel" disabled={isEmpty} onClick={cancel}>Cancel</button>
        </div>
    </div>
}