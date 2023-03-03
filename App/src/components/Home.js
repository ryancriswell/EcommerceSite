
export default function Home(){
    return(
        <div id="content">
            <section className="showcase-container" id="best-choices">
                <div className="item-showcase">
                    <h1 className="section-header">Top Review</h1>
                    <img src="../images/Mocha Bag.png" alt="Mocha Bean coffee" className="item-image"/>
                    <p className="section-boldline">Tod Smith</p>
                    <p className="section-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lacus vestibulum sed arcu non
                        odio euismod. Nibh tortor id aliquet lectus
                        proin nibh nisl condimentum id.
                    </p>
                </div>
                <div id="item-showcase">
                    <h1 className="section-header">Owner's Choice</h1>
                    <img src="../images/Robusta-Bean.png" alt="Robusta Bean coffee" className="item-image"/>
                    <p className="section-boldline">The Lads Favorite</p>
                    <p className="section-text">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lacus vestibulum sed arcu non
                        odio euismod. Nibh tortor id aliquet lectus
                        proin nibh nisl condimentum id.
                    </p>
                </div>
            </section>
            <section className="showcase-container" id="top-sellers">
                <h1 className="section-header">Top Sellers</h1>
                <div className="item-showcase">
                    <h1 className="section-header">1.</h1>
                    <img src="../images/Aztec-Bean.png" alt="Aztec Bean coffee" className="item-image"/>
                </div>
                <div className="item-showcase">
                    <h1 className="section-header">2.</h1>
                    <img src="../images/Brazil-Beans.png" alt="Brazil Bean coffee" className="item-image"/>
                </div>
                <div className="item-showcase">
                    <h1 className="section-header">3.</h1>
                    <img src="../images/TheclassNameic-Bean.png" alt="The classNameic Bean coffee" className="item-image"/>
                </div>
            </section>
        </div>
    );
}