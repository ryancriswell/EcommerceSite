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
        return <>
                <tr>
                    <td className="cartTotalName">Total:</td>
                    <td className="cartTotal">{this.props.total}</td>
                </tr>
                <tr>
                    <td className="cartTotalName">(+tax)</td>
                    <td className="cartTotalWithTax">{this.props.totalWithTax}</td>
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

    const tax = 1.08;
    let checkout = () => alert("Stub! " + JSON.stringify(props.cartItems));
    let cancel = () => props.setCartItems({});


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