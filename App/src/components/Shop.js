import React from "react";
import { ItemShowcase } from "./ItemShowcase";

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

export default class Shop extends React.Component {
    render() {
        const [itemList, setItemList] = useState(null);

        useEffect(() => {
            fetch("/shopitems")
                .then((list) => setItemList(JSON.parse(list)))
                .catch(() => setItemList([]));
        }, []);

        if (itemList === null) {
            return <p>Loading...</p>;
        }

        var rows = Math.floor(itemList.length() / 3);

        var htmlRows = [];

        for(var i = 0; i < rows; ++i) {
            let items = [];

            for(var j = i * 3; j < i * 3 + 3; ++j) {
                let thisItem = itemList[j];
                items.push(
                    <Item key={j} title={thisItem.name} />
                );
            }

            htmlRows.push(
                <section key={i} className="showcase-container">
                </section>
            );
        }

        return (
            <div>
                <div>
                    {htmlRows}
                </div>
            </div>
        );
    }

}