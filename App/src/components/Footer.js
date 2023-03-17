import React from "react";

export default function Footer() {
    let cartHandler = (event) => {
        event.preventDefault();
        props.setCartShown(!props.cartShown)
    }
    let stub = (event) => {
        event.preventDefault();
        alert("Stub!");
    }

    //email will be the email string that is entered into the box yay!
    const [inputs, setInputs] = React.useState({});
  

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //choose what to do with the input data: email: "" and feedback: ""
        console.log(inputs);


    // Request the list of items from the server
        fetch("/email", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        })
     
    }



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
                <li><a href="my-account" onClick={stub}>My Account</a></li>
                <li><a href="cart" onClick={cartHandler}>Cart</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h2>Send us your thoughts</h2>
            <h2>Send us your thoughts</h2>
            <form id="emailForm" onSubmit={handleSubmit}>
                <label htmlFor="feedback-email">Email (required)</label>
                {/* This is the email input box*/}
                <input id="feedback-email" type="email" name="email" placeholder="john.doe@gmail.com" value={inputs.email} onChange={handleChange} />
                {/* This is the feedback text input box*/}
                <input id="feedback-text" type="text" name="feedback" value={inputs.feedback} onChange={handleChange} />

                <input type="submit" value="Submit" />

            </form>
        </div>
    </footer>
}


