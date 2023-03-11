
import React from 'react';
/**
 * Full Header, including logo, account buttons, nav bar, and banner - common to each page
 */
export default function Header(){

    function NavBar() {
        let buttons = []
        buttons.push(<a key="about" href="/about-us" className="nav-button">About Us</a>);
        buttons.push(<a key="shop" href="/shop" className="nav-button">Shop</a>);
        buttons.push(<a key="subscribe" href="/subscription" className="nav-button">Subscription</a>);
        buttons.push(<a key="locations" href="/locations" className="nav-button">Locations</a>);
        
        return (
            <div id="page-buttons">
                <div className="flex-dummy"></div>
                {buttons}
                <div className="flex-dummy"></div>
            </div>
        );
    }

    /**
     * Simple dynamic image at the top of each page.
     */
    function Banner(){
        document.addEventListener("scroll", update_banner.bind("banner"))
        return <div id="banner">
            <img src="../images/Banner.png" aria-hidden="true" alt="Banner Image" />
        </div>
    }
    
    function update_banner() {
        let banner = document.getElementById(this);
        console.log(banner.offsetTop);
        if (banner !== null) {
            let image = banner.children[0];
            image.style.height = banner.offsetTop + "px";
        }
    }

    /**
     * Tools, including cart, account settings, and search.
     */
    function Toolbox(){
        return (
            <div id="tools">
                <a href="search">
                    <i aria-hidden="true" className="fas fa-magnifying-glass" title="Search"></i>
                    <span className="sr-only">Search</span>
                </a>
                <a href="account">
                    <i aria-hidden="true" className="fas fa-user" title="My Account"></i>
                    <span className="sr-only">Account</span>
                </a>
                <a href="cart">
                    <i aria-hidden="true" className="fas fa-cart-shopping" title="My Cart"></i>
                    <span className="sr-only">My Cart</span>
                </a>
            </div>
        );
    }

    return (
        <>
        <nav>
            <a id="skip-link" tabIndex="0" href="#content">Skip to content.</a>
            {/* Upper section, with logo and account btns */}
            <div id="upper-container">
                <a display="block" href="/" id="logo-container">
                    <img src="../images/logo.png" alt="Lads Coffee Co. Logo" id="logo" />
                </a>
                {Toolbox()}
            </div>
            {NavBar()}
        </nav>
        {Banner()}
        </>
    );
}