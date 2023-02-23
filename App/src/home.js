
export default function Home(){
    return(
        <div id="content">
            <section class="showcase-container" id="best-choices">
                <div class="item-showcase">
                    <h1 class="section-header">Top Review</h1>
                    <img src="../images/Mocha Bag.png" alt="Mocha Bean coffee" class="item-image"/>
                    <p class="section-boldline">Tod Smith</p>
                    <p class="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lacus vestibulum sed arcu non
                        odio euismod. Nibh tortor id aliquet lectus
                        proin nibh nisl condimentum id.
                    </p>
                </div>
                <div id="item-showcase">
                    <h1 class="section-header">Owner's Choice</h1>
                    <img src="../images/Robusta-Bean.png" alt="Robusta Bean coffee" class="item-image"/>
                    <p class="section-boldline">The Lads Favorite</p>
                    <p class="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lacus vestibulum sed arcu non
                        odio euismod. Nibh tortor id aliquet lectus
                        proin nibh nisl condimentum id.
                    </p>
                </div>
            </section>
            <section class="showcase-container" id="top-sellers">
                <h1 class="section-header">Top Sellers</h1>
                <div class="item-showcase">
                    <h1 class="section-header">1.</h1>
                    <img src="../images/Aztec-Bean.png" alt="Aztec Bean coffee" class="item-image"/>
                </div>
                <div class="item-showcase">
                    <h1 class="section-header">2.</h1>
                    <img src="../images/Brazil-Beans.png" alt="Brazil Bean coffee" class="item-image"/>
                </div>
                <div class="item-showcase">
                    <h1 class="section-header">3.</h1>
                    <img src="../images/TheClassic-Bean.png" alt="The Classic Bean coffee" class="item-image"/>
                </div>
            </section>
        </div>
    );
}