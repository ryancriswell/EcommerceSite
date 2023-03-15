import Map from "./map/Map";

export default function Locations(){

    return(
        <div id="locations">
            <h1 id="locations--title">Come visit us in Spokane!</h1>
            
            <section className="locations--row">
                <div className="locations--store">
                    <h3 className="locations--subtitle">EWU Library</h3>
                    <p className="locations--text">7:30am-8pm Mon-Fri</p>
                    <p className="locations--text">Closed Sat-Sun</p>
                    <p className="locations--text">320 Media Lane 100 Library Cheney, WA 99004</p>
                </div>

                <div className="locations--store">
                    <h3 className="locations--subtitle">Northtown Mall</h3>
                    <p className="locations--text">10am-8pm Mon-Sun</p>
                    <p className="locations--text">8am-9pm Sat-Sun</p>
                    <p className="locations--text">4750 N Division #263 Spokane, WA 99207</p>
                </div>

                <div className="locations--store">
                    <h3 className="locations--subtitle">EWU Catalyst Building</h3>
                    <p className="locations--text">7:30am-8pm Mon-Fri</p>
                    <p className="locations--text">Closed Sat-Sun</p>
                    <p className="locations--text">601 E Riverside Ave, Spokane, WA 99202</p>
                </div>
            </section>

            <section className="locations--row">
                <div className="locations--store">
                    <h3 className="locations--subtitle">Spokane Valley Mall</h3>
                    <p className="locations--text">10am-8pm Mon-Sun</p>
                    <p className="locations--text">7am-8pm Sat-Sun</p>
                    <p className="locations--text">14700 E Indiana #K-11 Spokane, WA 99216</p>
                </div>
            
                <div className="locations--store">
                    <h3 className="locations--subtitle">Northwest Boulevard</h3>
                    <p className="locations--text">5:30am-8pm Mon-Fri</p>
                    <p className="locations--text">6:30-7pm Sat-Sun</p>
                    <p className="locations--text">3318 W Northwest Blvd, Spokane, WA 99205</p>
                </div>
            </section>

            <div id='google-map'>
                <Map/>
            </div>
        </div>
    );

}