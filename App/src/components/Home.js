import React from "react";
import { ItemShowcase } from "./ItemShowcase";

export default function Home(){

    var lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Lacus vestibulum sed arcu non
    odio euismod. Nibh tortor id aliquet lectus
    proin nibh nisl condimentum id.`;

    return(
        <div id="content">
            <section className="showcase-container" id="best-choices">
                <ItemShowcase title="Top Review" boldline="Tod Smith" image-src="../images/Mocha Bag.png" alt="Mocha Bean coffee" content={lipsum} />
                <ItemShowcase title="Owner's Choice" boldline="The Lads Favorite" image-src="../images/Colombia-Bean.png" alt="Colombia Bean coffee" content={lipsum} />
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