import React from "react";

export default function Footer() {
    return <footer>
        <div className="footer-section">
            <h1>Keep in touch with us!</h1>
            {/* Small is used for legal fineprint */}
            <small>&copy; 2023 Lads Coffee Co.</small>
        </div>
        <div className="footer-section">
            <h2>Socials</h2>
            <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.tiktok.com">TikTok</a></li>
                <li><a href="https://www.youtube.com">YouTube</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h2>Account</h2>
            <ul>
                <li><a href="my-account">My Account</a></li>
                <li><a href="cart">Cart</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h2>Send us your thoughts</h2>
            <form>
                <label htmlFor="feedback-email">Email (required)</label>
                <input id="feedback-email" type="email" placeholder="john.doe@gmail.com" required />
                <textarea required id="feedback-text"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </footer>
}