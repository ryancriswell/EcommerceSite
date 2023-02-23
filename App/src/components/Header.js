
import React from 'react';
/**
 * Full Header, including logo, account buttons, nav bar, and banner - common to each page
 */
export default class Header extends React.Component(){
    render() {
        return (
            <nav>
                <a id="skip-link" tabIndex="0" href="#content">Skip to content.</a>
                {/* Upper section, with logo and account btns */}
                <div id="upper-container">
                    <a display="block" href="index.html" id="logo-container">
                        <img src="../images/logo.png" alt="Lads Coffee Co. Logo" id="logo" />
                    </a>
                    <Toolbox />
                </div>
                <NavBar exclude={this.props.exclude}/>
            </nav>
        );
    }
}

/**
 * Site navigation links
 */
class NavBar extends React.Component {
    render() {
        let buttons = [];

        //Add buttons, excluding whichever page we're already on
        if (this.props.exclude !== "home")
            buttons.push(<a key="home" href="index.html" className="nav-button">Home</a>);

        if (this.props.exclude !== "about")
            buttons.push(<a key="about" href="about-us.html" className="nav-button">About Us</a>);

        if (this.props.exclude !== "shop")
            buttons.push(<a key="shop" href="shop.html" className="nav-button">Shop</a>);

        if (this.props.exclude !== "subscribe")
            buttons.push(<a key="subscribe" href="subscription.html" className="nav-button">Subscription</a>);

        if (this.props.exclude !== "locations")
            buttons.push(<a key="locations" href="map.html" className="nav-button">Locations</a>);
        
        return <div id="page-buttons">
            <div className="flex-dummy"></div>
            {buttons}
            <div className="flex-dummy"></div>
        </div>
    }
}
/**
 * Tools, including cart, account settings, and search.
 */
class Toolbox extends React.Component {
    render() {
        return <div id="tools">
            <a href="search.html">
                <i aria-hidden="true" className="fas fa-magnifying-glass" title="Search"></i>
                <span className="sr-only">Search</span>
            </a>
            <a href="account.html">
                <i aria-hidden="true" className="fas fa-user" title="My Account"></i>
                <span className="sr-only">Account</span>
            </a>
            <a href="cart.html">
                <i aria-hidden="true" className="fas fa-cart-shopping" title="My Cart"></i>
                <span className="sr-only">My Cart</span>
            </a>
        </div>
    }
}
/**
 * Simple dynamic image at the top of each page.
 */
class Banner extends React.Component {
    render() {
        document.addEventListener("scroll", update_banner.bind("banner"))
        return <div id="banner">
            <img src="../images/Banner.png" aria-hidden="true" alt="Banner Image" />
        </div>
    }
}

function update_banner() {
    let banner = document.getElementById(this);
    console.log(banner.offsetTop);
    if (banner !== null) {
        let image = banner.children[0];
        image.style.height = banner.offsetTop + "px";
    }
}