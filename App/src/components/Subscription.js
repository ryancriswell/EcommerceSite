
export default function subscription(){
    return(
        <div class="subscription">
            <section className="subscription-row" id="subscription-wrapper">
                <div className="subscription-column">
                    <h1 id="subscription-title">Lads<br/>Coffee<br/>Subscription</h1>
                </div>
                <div className="subscription-column">
                    <h2 id="subscription-body" font-size="3vw">
                        Can't get enough of our fabulous coffee? Never run out of our one of a kind beans ever again when you subscribe!
                        Start each morning without the stress of missing out on a fresh cup of coffee. Once you subscribe the Lads will handle it all.
                    </h2>
                </div>
            </section>

            <section id="subscription-wrapper">
                <h3 id="subscription-second-title" font-size="2vw">How does it Work?</h3><hr/>
                <div className="subscription-row">
                    <div className="subscription-column">
                        <img src="..\images\Coffee-bean-1.png" className="subscription-icons"/> 
                        <div className="subscription-column">
                            <h4>select your favorite bags of coffee</h4>
                        </div>
                    </div>
                    <div className="subscription-column">
                        <img src="..\images\icons8-open-delivered-box-50.png" className="subscription-icons"/>
                        <div className="subscription-column">
                            <h4>A box of your chosen beans will be delivered monthly</h4>
                        </div>
                    </div>
                    <div className="subscription-column">
                        <img src="..\images\icons8-gift-50.png" className="subscription-icons"/>
                        <div className="subscription-columm">
                            <h4>Enjoy a Lads coffee roast every day of the month!</h4>
                        </div>
                    </div>
                </div> 
            </section>

            <section id="subscription-wrapper" className="subscription-row" >
                <div className="subscription-column">
                    <img src="..\images\Student-Essentials.png" className="subscription-image"/> 
                </div>
                <div className="coffee-subscription-box">
                    <h2 id="subscription-second-title">Lads Coffee Subscription</h2>
                </div>
            </section>
        </div>
    );
}