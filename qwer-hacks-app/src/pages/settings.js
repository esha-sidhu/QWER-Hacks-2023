import React from 'react';
import "../styles/main.css";
import "../styles/settings.css";

function Settings () {
    return (
        
        <div>
            <div className="header">
            <img src={require("../images/plant-header.png")} alt="Plant header" width="100%" height="300">
            </img>
            </div>
            
            <h1> Get To Know You:  </h1>
            

            <form id="form1">
            <section form-1>

            <h2>&#9829;  What best describes your gardening level?</h2>
            <label for="var_newbie"><input type="radio" name="role" id="var_newbie" />Newbie!</label>
            <label for="var_beginner"><input type="radio" name="role" id="var_beginner" />Beginner</label>
            <label for="var_pro"><input type="radio" name="role" id="var_pro" />Gardening Pro</label>

            <h2>&#9829; What do you hope to grow?</h2>
            <label for="plant_veggies"><input type="radio" name="plant" id="plant_veggies" />Veggies</label>
            <label for="plant_fruits"><input type="radio" name="plant" id="plant_fruits" />Fruits</label>
            <label for="plant_flowers"><input type="radio" name="plant" id="plant_flowers" />Flowers</label>
            <label for="plant_herbs"><input type="radio" name="plant" id="plant_herbs" />Herbs</label>

            <h2>&#9829; Where is your garden going to be?</h2>
            <label for="loc_in"><input type="radio" name="loc" id="loc_in" />Indoor</label>
            <label for="loc_out"><input type="radio" name="loc" id="loc_out" />Outdoor patio</label>
            <label for="loc_back"><input type="radio" name="loc" id="loc_back" />Backyard</label>

            <h2>&#9829;  Do you have any indoor pet?</h2>
            <label for="pet_y"><input type="radio" name="pet" id="pet_y" />Yes</label>
            <label for="pet_n"><input type="radio" name="pet" id="pet_n" />No</label>

            <h2>&#9829;  What type of soil do you have? (use your best estimate) </h2>
            <label for="soil_gravelly"><input type="radio" name="soil" id="soil_gravelly" />Gravelly</label>
            <label for="soil_sandy"><input type="radio" name="soil" id="soil_sandy" />Sandy</label>
            <label for="soil_sticky"><input type="radio" name="soil" id="soil_sticky" />Sticky</label>

            <h2>&#9829;  What is the temperature like? </h2>
            <label for="temp_l"><input type="radio" name="temp" id="temp_l" />Cold</label>
            <label for="temp_m"><input type="radio" name="temp" id="temp_m" />Warm</label>
            <label for="temp_h"><input type="radio" name="temp" id="temp_h" />Hot</label>



            <button type="submit" value="Save">Save</button>
            </section>
            </form>
        


        </div>

        
    );
}

export default Settings;