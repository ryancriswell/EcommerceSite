import React from "react";
import { ItemShowcase } from "./ItemShowcase";

export default function Shop(){

    class AddToCart extends React.Component {
        render() {
            return <div>
                <button>
                    <span className="add-to-cart">Add To cart</span>
                </button>
            </div>
        }
    }
    class Item extends ItemShowcase {
        render() {
            return <div>
                {super.render()}
                <AddToCart />
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