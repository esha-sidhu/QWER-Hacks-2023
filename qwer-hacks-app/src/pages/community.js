import React from 'react';
import "../styles/div-gallery.css";

function Community () {
    return (
        <div>
            <br /> <br /> <br /> <br />
            <div className="responsive">
                <div className="gallery">
                    <img src={require('../images/brian.jpg')} alt="Garden in Neighborhood" width="518" height="346"/>
                </div>
                <div className="desc">Garden by Brian Wangenheim</div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/filip-urban-ffJ8Qa0VQU0-unsplash.jpg")} alt="Boy Watering Plants in Garden" width="698" height="467"/>
                </div>
                <div className="desc">Garden by Filip Urban</div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/jacob-thibodeau-lqX4_2WPk0k-unsplash.jpg")} alt="Community Garden/Greenhouse" width="600" height="400"/>
                </div>
                <div className="desc">Garden by Jacob Thibodeau</div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/kenny-eliason-QMj47_NSmfs-unsplash.jpg")} alt="Woman working on garden" width="258" height="387"/>
                </div>
                <div className="desc">Garden by Kenny Eliason</div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/kenny-eliason-qo6_mo9dsYg-unsplash.jpg")} alt="Group working on community garden" width="512" height="342"/>
                </div>
                <div className="desc">Garden by Kenny Eliason</div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/steve-adams-bY_q4VodUc0-unsplash.jpg")} alt="Community garden" width="324" height="216"/>
                </div>
                <div className="desc">Garden by Steve Adams</div>
            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/www-zanda-photography-RBdE3jv5y68-unsplash.jpg")} alt="Community garden in greenhouse" width="547" height="365"/>
                </div>
                <div className="desc">Garden by Zanda_Photography</div>
            </div>
            <br/> <br/> <br/>
            <p>Photos from Unsplash</p>
        </div>
    );
}

export default Community;