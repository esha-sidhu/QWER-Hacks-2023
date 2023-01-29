import React from 'react';
import "../styles/resources.css"

function Resources() {
    return (
        <div>
            <div className="header">
                <img src={require("../images/resources_background.jpg")} alt="Plant header" width="100%" height="auto">
                </img>
            </div>
            <center><h1> Resources page </h1>
            <p> Sustainable Farming: </p>
            <a target="_blank" href="https://www.active.com/nutrition/articles/how-to-start-a-sustainable-home-garden-2348107" className="button">Home Farming</a> <br></br>
            <a target="_blank" href="https://pulitzercenter.org/stories/how-start-sustainable-farm-project-your-community" className="button"> Community Farming</a> <br></br>
            <p> Find Local Food: </p>
            <a target="_blank" href="https://findlocalfood.com/" className="button"> Finder and Seller Tool</a><br></br>
            <a target="_blank" href="https://sustainableagriculture.net/blog/national-guide-to-finding-local-food/" className="button"> National Guide to Local Food</a> <br></br>
            <p> Find Food Banks: </p>
            <a target="_blank" href="https://www.feedingamerica.org/find-your-local-foodbank" className="button">Finder Tool</a><br/>
            </center>
        </div >
    );
}

export default Resources;