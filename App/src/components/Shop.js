import React from "react";
import { ItemShowcase } from "./ItemShowcase";

export default function Shop(props){  

    function handleClick(title){
        let arr = {...props.cartItems};
        arr[title] = ((props.cartItems[title] ?? 0) + 1)
        console.log(props.cartItems);
        props.setCartItems(arr);
        props.setCartShown(true);
    }
    
    class AddToCart extends React.Component {

        render() {
            return <div>
                <button onClick={() => handleClick(this.props.title)}>
                    <span className="add-to-cart">Add To cart</span>
                </button>
            </div>
        }
    }
    class Item extends ItemShowcase {
        render() {
            return <div>
                {super.render()}
                <AddToCart title={this.props.title}/>
            </div>                        
        }
    }

    return (
        <div>
            <div>
                <section className="showcase-container" id="Azetec-Bean">
                    <Item image-src="../images/Aztec-Bean.png" title="Aztec Bean" />
                    <Item image-src="../images/Brazil-Beans.png" title="Brazil Bean" />
                    <Item image-src="../images/Mocha Bag.png" title="Mocha Bag" />
                </section>
                <section className="showcase-container" id="Robusta-Bean">
                    <Item image-src="../images/Colombia-Bean.png" title="Colombia Bean" />
                    <Item image-src="../images/Eagle-Bean.png" title="Eagle Bean" />
                    <Item image-src="../images/Decaf.png" title="Decaf Beans" />
                </section>
                <section className="showcase-container" id="top-sellers">
                </section>
            </div>
        </div>
    );
}