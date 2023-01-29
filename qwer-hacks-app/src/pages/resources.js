import React from 'react';
import "../styles/resources.css"

function Resources() {
    return (
        /*
        <div>
            <h1> Resources page </h1>
            <p> Sustainable Farming: </p>
            <button onClick={document.location = "https://www.active.com/nutrition/articles/how-to-start-a-sustainable-home-garden-2348107"} target="_blank">Home Farming</button>
            <button onClick={document.location = "https://pulitzercenter.org/stories/how-start-sustainable-farm-project-your-community"} target="_blank" >Community Farming</button>
            <p> Find Local Food: </p>
            <button onClick={document.location = "https://findlocalfood.com/"} target="_blank" >Find and Sell Local Food</button>
            <button onClick={document.location = "https://sustainableagriculture.net/blog/national-guide-to-finding-local-food/"} target="_blank" >National Guide</button>
            <p> Find Food Banks: </p>

        </div>
        */
        <div>
            <center><h1> Resources page </h1>
                <p> Sustainable Farming: </p>
                <a target="_blank" href="https://www.active.com/nutrition/articles/how-to-start-a-sustainable-home-garden-2348107" class="button">Home Farming</a> <br />
                <a target="_blank" href="https://pulitzercenter.org/stories/how-start-sustainable-farm-project-your-community" class="button"> Community Farming</a>
                <p> Find Local Food: </p>
                <a target="_blank" href="https://findlocalfood.com/" class="button"> Finder and Seller Tool</a><br />
                <a target="_blank" href="https://sustainableagriculture.net/blog/national-guide-to-finding-local-food/" class="button"> National Guide to Local Food</a>
                <p> Find Food Banks: </p>
                <a target="_blank" href="https://www.feedingamerica.org/find-your-local-foodbank" class="button">Finder Tool</a>
            </center>
        </div >
    );
}

export default Resources;