/**
 * Full Header, including logo, account buttons, nav bar, and banner - common to each page
 */
class Header extends React.Component {
    render() {
        return <nav>
            <a id="skip-link" tabindex="0" href="#content">Skip to content.</a>
            {/* Upper section, with logo and account btns */}
            <div id="upper-container">
                <a display="block" href="index.html" id="logo-container">
                    <img src="../images/logo.png" alt="Lads Coffee Co. Logo" id="logo" />
                </a>
                <Toolbox />
            </div>
            <NavBar exclude={this.props.exclude}/>
        </nav>
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
            buttons.push(<a href="index.html" class="nav-button">Home</a>);

        if (this.props.exclude !== "about")
            buttons.push(<a href="about-us.html" class="nav-button">About Us</a>);

        if (this.props.exclude !== "shop")
            buttons.push(<a href="shop.html" class="nav-button">Shop</a>);

        if (this.props.exclude !== "subscribe")
            buttons.push(<a href="subscription.html" class="nav-button">Subscription</a>);

        if (this.props.exclude !== "locations")
            buttons.push(<a href="map.html" class="nav-button">Locations</a>);
        
        return <div id="page-buttons">
            <div class="flex-dummy"></div>
            {buttons}
            <div class="flex-dummy"></div>
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
                <i aria-hidden="true" class="fas fa-magnifying-glass" title="Search"></i>
                <span class="sr-only">Search</span>
            </a>
            <a href="account.html">
                <i aria-hidden="true" class="fas fa-user" title="My Account"></i>
                <span class="sr-only">Account</span>
            </a>
            <a href="cart.html">
                <i aria-hidden="true" class="fas fa-cart-shopping" title="My Cart"></i>
                <span class="sr-only">My Cart</span>
            </a>
        </div>
    }
}
/**
 * Simple dynamic image at the top of each page.
 */
class Banner extends React.Component {
    render() {
        return <div id="banner">
            <img src="../images/Banner.png" aria-hidden="true" alt="Banner Image" />
        </div>
    }
}
