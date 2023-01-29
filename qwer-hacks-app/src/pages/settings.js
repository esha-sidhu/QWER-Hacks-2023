import React from 'react';

function Settings () {
    return (
        <div>
            <h1> Settings page </h1>
            

            <form id="form1">

            <h2>What best describes you?</h2>
            <label for="var_string"><input type="radio" name="variable" id="var_string" />Newbie!</label>
            <label for="var_join"><input type="radio" name="variable" id="var_join" />Beginner</label>
            <label for="var_info"><input type="radio" name="variable" id="var_info" />Gardening Pro</label>

            <h2>What do you hope to grow?</h2>
            <label for="var_string"><input type="radio" name="variable" id="var_string" />Veggies</label>
            <label for="var_join"><input type="radio" name="variable" id="var_join" />Fruits</label>
            <label for="var_info"><input type="radio" name="variable" id="var_info" />Flowers</label>
            <label for="var_info"><input type="radio" name="variable" id="var_info" />Herbs</label>

            <h2>Where is your garden going to be?</h2>
            <label for="var_string"><input type="radio" name="variable" id="var_string" />Indoor</label>
            <label for="var_join"><input type="radio" name="variable" id="var_join" />Outdoor patio</label>
            <label for="var_info"><input type="radio" name="variable" id="var_info" />Backyard</label>

            <h2>Do you have any indoor pet?</h2>
            <label for="var_string"><input type="radio" name="variable" id="var_string" />Yes</label>
            <label for="var_join"><input type="radio" name="variable" id="var_join" />No</label>

            <h2>What type of soil do you have? (use your best estimate:) </h2>
            <label for="var_string"><input type="radio" name="variable" id="var_string" />Gravelly</label>
            <label for="var_join"><input type="radio" name="variable" id="var_join" />Sandy</label>
            <label for="var_info"><input type="radio" name="variable" id="var_info" />Sticky</label>


            <button type="submit" value="Save">Save</button>

            </form>
        


        </div>

        
    );
}

export default Settings;