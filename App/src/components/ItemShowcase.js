import React from "react";

export class ItemShowcase extends React.Component {
    render() {
        return <div className="item-showcase">
                <h1 className="section-header">{this.props["title"]}</h1>
                <img src={this.props["image-src"]} alt={this.props["alt"]} className="item-image" width="500" />
                <p className="section-boldline">{this.props["boldline"]}</p>
                <p className="section-text">
                {this.props["content"]}
                </p>
            </div>
    }
}