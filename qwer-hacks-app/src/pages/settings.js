import React from 'react';

function Settings () {
    return (
        <div>
            <h1> Settings page </h1>
            

            <form id="form1">

            <h2>What best describes you?</h2>
            <label for="role_newbie"><input type="radio" name="role" id="role_newbie" />Newbie!</label>
            <label for="role_beginner"><input type="radio" name="role" id="role_beginner" />Beginner</label>
            <label for="role_pro"><input type="radio" name="role" id="role_pro" />Gardening Pro</label>

            <h2>What do you hope to grow?</h2>
            <label for="plant_veg"><input type="radio" name="plant" id="plant_veg" />Veggies</label>
            <label for="plant_fruits"><input type="radio" name="plant" id="plant_fruits" />Fruits</label>
            <label for="plant_flowers"><input type="radio" name="plant" id="plant_flowers" />Flowers</label>
            <label for="plant_herbs"><input type="radio" name="plant" id="plant_herbs" />Herbs</label>

            <h2>Where is your garden going to be?</h2>
            <label for="loc_in"><input type="radio" name="loc" id="loc_in" />Indoor</label>
            <label for="loc_out"><input type="radio" name="loc" id="loc_out" />Outdoor patio</label>
            <label for="loc_back"><input type="radio" name="loc" id="loc_back" />Backyard</label>

            <h2>Do you have any indoor pet?</h2>
            <label for="pet_y"><input type="radio" name="pet" id="pet_y" />Yes</label>
            <label for="pet_n"><input type="radio" name="pet" id="pet_n" />No</label>

            <h2>What type of soil do you have? (use your best estimate:) </h2>
            <label for="soil_g"><input type="radio" name="soil" id="soil_g" />Gravelly</label>
            <label for="soil_sandy"><input type="radio" name="soil" id="soil_sandy" />Sandy</label>
            <label for="soil_sticky"><input type="radio" name="soil" id="soil_sticky" />Sticky</label>


            <button type="submit" value="Save">Save</button>

            </form>
        


        </div>

        
    );
}

export default Settings;