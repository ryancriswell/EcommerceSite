import React from "react";
import { ItemShowcase } from "./ItemShowcase";

export default function Home(){

    var lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Lacus vestibulum sed arcu non
    odio euismod. Nibh tortor id aliquet lectus
    proin nibh nisl condimentum id.`;

    let review = `My favorite is Mocha bean. This is personally my favorite because of the rich and smooth flavor it provides.
    When I use it to pull an espresso shot, the shot is the perfect balance between bitterness and sweet`;
    let showcase = `The lads personal favorite bean is Colombia. The stronger taste the bean provides
    may not be the most ideal for everyone, but it allows for longer sessions at night coding!`;

    return(
        <div id="content">
            <section className="showcase-container" id="best-choices">
                <ItemShowcase title="Top Review" boldline="Tod Smith" image-src="../images/Mocha Bag.png" alt="Mocha Bean coffee" content={review} />
                <ItemShowcase title="Owner's Choice" boldline="The Lads Favorite" image-src="../images/Colombia-Bean.png" alt="Colombia Bean coffee" content={showcase} />
            </section>
            <section className="showcase-container" id="top-sellers">
                <h1 className="section-header">Top Sellers</h1>
                <ItemShowcase title="1." image-src="../images/Aztec-Bean.png" alt="Aztec Bean coffee" />
                <ItemShowcase title="2." image-src="../images/Brazil-Beans.png" alt="Brazil Bean coffee" />
                <ItemShowcase title="3." image-src="../images/Decaf.png" alt="Decaf coffee" />
            </section>
        </div>
    );
}