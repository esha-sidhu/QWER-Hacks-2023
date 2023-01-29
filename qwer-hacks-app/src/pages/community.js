import React from 'react';
import "../styles/div-gallery.css";

function Community () {
    return (
        <div>
            <br></br><br></br>
            <h1>Community</h1>
            <div className="responsive">
                <div className="gallery">
                    <img src={require('../images/brian-post2.jpg')} alt="Community vegetable garden -Brian Waganheim" width="518" height="346"/>
                </div>

            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/jacob-post.jpg")} alt="Restaurant Garden -Jacob Thibodeau" width="698" height="467"/>
                </div>

            </div>
            <div className="responsive">
                <div className="gallery">
                    <img src={require("../images/kenny-post.jpg")} alt="Flower garden -Kenny Eliason" width="600" height="400"/>
                </div>

            </div>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}

export default Community;