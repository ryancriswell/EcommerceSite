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

}
export default class Cart extends React.Component {
    render() {
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
        const tax = 1.08;

        return <div id="cartModal">
            <h1>My Cart</h1>
            <CartTable contents={itemList}/>
            <button></button>
        </div>
    }
}