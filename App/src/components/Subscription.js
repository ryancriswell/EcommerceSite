
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
                <center>
                    <div className="subscription-second-row">
                        <div/> 
                            <img src="..\images\Coffee-bean-1a.png" className="subscription-icons"/>
                        <div/>
                            <h4>select your favorite bags of coffee</h4>
                        <div/>
                            <img src="..\images\icons8-open-delivered-box-50.png" className="subscription-icons"/>
                        <div/>
                            <h4>A box of your chosen beans will be delivered monthly</h4>
                        <div/>
                            <img src="..\images\icons8-gift-50.png" className="subscription-icons"/>
                        <div/>
                            <h4>Enjoy a Lads coffee roast every day of the month!</h4>
                        <div/>
                    </div> 
                </center>
            </section>

            <section id="subscription-wrapper" className="subscription-row">
                <div className="subscription-column">
                    <img src="..\images\Student-Essentials.png" className="subscription-image"/> 
                </div>
                
                <div className="coffee-subscription-box">
                    <h2 id="subscription-second-title">Lads Coffee Subscription</h2>
                    <center>
                        <img src="..\images\logo.png" id="coffee-subscription-logo"/>
                    </center>
                    <center>
                    <div id="coffee-subscription-choice-descriptors" >Type of coffee</div>
                    <div id="coffee-subscription-choice-descriptors">Ground or Bean</div>
                    </center>
                    <div/>
                    <label for="Bag1">Bag 1:
                        <select id="bags" name="bag1">
                        <option value="nothing">Please Select An Option</option>
                            <option value="aztec">Aztec</option>
                            <option value="brazil">Brazil</option>
                            <option value="classic">Classic</option>
                            <option value="colombia">Colombia</option>
                            <option value="decaf">Decaf</option>
                            <option value="eagle">Eagle</option>
                            <option value="Liberica">Liberica</option>
                            <option value="Mocha">Mocha</option>
                        </select>
                        <button class="coffee-subscription-button">
                            <img src="..\images\icons8-grinder-64.png"/>
                        </button>
                        <button class="coffee-subscription-button">
                            <img src="..\images\Cofee-Bean-2a.png"/>
                        </button>
                    </label>
                    
                    <div/>
                    
                    <label for="Bag2">Bag 2:
                        <select id="bags" name="bag1">
                            <option value="nothing">Please Select An Option</option>
                            <option value="aztec">Aztec</option>
                            <option value="brazil">Brazil</option>
                            <option value="classic">Classic</option>
                            <option value="colombia">Colombia</option>
                            <option value="decaf">Decaf</option>
                            <option value="eagle">Eagle</option>
                            <option value="Liberica">Liberica</option>
                            <option value="Mocha">Mocha</option>
                        </select>
                        <button class="coffee-subscription-button">
                            <img src="..\images\icons8-grinder-64.png"/>
                        </button>
                        <button class="coffee-subscription-button">
                            <img src="..\images\Cofee-Bean-2a.png"/>
                        </button>
                    </label>
                    
                    <div/>
                    
                    <label for="Bag3">Bag 3:
                        <select id="bags" name="bag1">      
                            <option value="nothing">Please Select An Option</option>
                            <option value="aztec">Aztec</option>
                            <option value="brazil">Brazil</option>
                            <option value="classic">Classic</option>
                            <option value="colombia">Colombia</option>
                            <option value="decaf">Decaf</option>
                            <option value="eagle">Eagle</option>
                            <option value="Liberica">Liberica</option>
                            <option value="Mocha">Mocha</option>
                        </select>
                        <button class="coffee-subscription-button">
                            <img src="..\images\icons8-grinder-64.png"/>
                        </button>
                        <button class="coffee-subscription-button">
                            <img src="..\images\Cofee-Bean-2a.png"/>
                        </button>
                    </label>

                    <div/>

                    <h2 id="subscription-third-title">Subscription length</h2>
                    <center>
                        <select id="sub-length" name="sub-length">
                                <option value="nothing">Please Select A Plan</option>
                                <option value="6m">6 Month Subscription</option>
                                <option value="1y">1 Year Subscription</option>
                                <option value="2y">2 Year Subscription</option>
                        </select>
                        <div/>
                        <a href="/account">
                            <button id="submit-button">Submit</button>
                        </a>
                    </center>
                </div>
            </section>
        </div>
    );
}