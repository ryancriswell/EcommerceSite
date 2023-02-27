
export default function AboutUs(){
    return(
        <div>
            <section class="aboutus--row">
                <div class="aboutus--column">
                    <h1 class="aboutus--h1">Redefining what it means to brew great coffee.</h1>
                </div>
                <div class="aboutus--column">
                    <img src="../images/hotcupwithbeans.jpeg" alt="A cup of coffee" class="aboutus--img"/>
                </div>
            </section>

            <section class="aboutus--row">
                <div class="aboutus--column" id="aboutus--subscription-wrapper">
                    <h1 id="aboutus--subscription-title">How does the subscription work?</h1>
                    <h4 id="aboutus--subscription-body">We know it can be overwhelming to choose your coffee before experiencing that fresh ground smell first.
                        Our subscription program allows you to try a different coffee every month, or if you are a conniseur
                        and you know your blend, just select that type at checkout and you'll never run out of 
                        your favorite beans again!
                    </h4>
                </div> 
            </section>

            <section class="aboutus--row">
                <div class="aboutus--column">
                    <img src="../images/coffeepeople.jpeg" alt="People drinking coffee and smiling" class="aboutus--img"/>
                </div>
                <div class="aboutus--column">
                    <h1 class="aboutus--h1">Our Mission</h1>
                    <h3 class="aboutus--h3">We want to connect our coffee with as many hearts as possible. There are billions of people drinking
                        filthy, nasty, rotten, bunk coffee beans from some of our competitiors because they're simply clueless. We are 
                        going to show them what it means to have a good cup of coffee even if it kills us.
                    </h3>
                </div>
            </section>
        </div>
    );
}