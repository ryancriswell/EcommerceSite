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
        return <table>
            <tr>
                <th class="item">Item</th>
                <th class="price">Price</th>
                <th class="quantity">Qty.</th>
            </tr>
            <tr>
                <th>The cool beans</th>
                <th>$10.00</th>
                <th>2</th>
            </tr>
            <tr>
                <th>Asdf</th>
                <th>10.00</th>
                <th>2</th>
            </tr>
            <tr>
                <th>Asdf</th>
                <th>10.00</th>
                <th>2</th>
            </tr>
            <tr>
                <th>Asdf</th>
                <th>10.00</th>
                <th>2</th>
            </tr>
        </table>
    }
}
export default function Cart() {
    const [shown, setShown] = React.useState(true);
    /*TODO: Fetch cart list from DB*/
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
    ];

    const hide = (event) => {
        event.preventDefault();
        setShown(false);
    }

    const tax = 1.08;

    return <div id="cart" className={shown ? "shown" : ""}>
        <h1>My Cart</h1>
        <a id="cart-close" onClick={hide} href="javascript:void()">
            <i aria-hidden="true" className="fas fa-xmark" title="Close"></i>
            <span className="sr-only">Close</span></a>
        <CartTable contents={itemList}/>
        <div class="buttons">
            <button id="cart-checkout">Checkout</button>
            <button id="cart-cancel">Cancel</button>
        </div>
    </div>
}