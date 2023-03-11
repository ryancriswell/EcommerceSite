import { Component, useEffect, useState } from "react";
import React from "react";
import { ItemShowcase } from "./ItemShowcase";

class AddToCart extends Component {
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

export default function Shop() {
    const [itemList, setData] = React.useState(null);

    // Request the list of items from the server
    React.useEffect(() => {
        fetch("/shopitems")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);

    // Request not satisfied yet, wait...
    if (!(itemList instanceof Array)) {
        return <p>Loading...</p>;
    }

    // Make a list of rows
    var rows = Math.floor(itemList.length / 3);
    var htmlRows = [];

    // Generate Html...
    for(var i = 0; i < rows; ++i) {
        let items = [];

        // Three items per row
        for(var j = i * 3; j < i * 3 + 3; ++j) {
            //Instantiate an Item component
            let thisItem = itemList[j];
            items.push(
                <Item key={j} title={thisItem.name} />
            );
        }

        //Push the whole row
        htmlRows.push(
            <section key={i} className="showcase-container">
            </section>
        );
    }


    // Return built page
    return (
        <div>
                {htmlRows}
        </div>
    );

}
