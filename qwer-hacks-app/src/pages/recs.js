import React from 'react';
import "../styles/recs.css";

function Recs () {
    return (
        <div>
            <br /> <br /> 
            <h1> Recommendation page </h1>
            <div className="responsive">
            <br />
                <div className="gallery1">
                    <img src={require("../images/green-beans-cropped.jpg")} alt="Green Beans" width="400" height="400"/>
                </div>
                <div className="desc1">Recommendation 1: Green Beans
                <br /> <br />
                <p>&#9829; Season: Fall</p>
                <p>&#9829; Climate: Cool</p>
                <p>&#9829; Soil type: Sticky</p>
                <p>&#9829; Location: Backyard</p>
                <p>&#9829; Difficulty to Grow: Easy</p>
                <p>&#9829; Toxic for Pets? No</p>
                <p>&#9829; Instructions to grow: "Since the seed is so small, a well-tilled seedbed is essential. Stones and large clods of dirt will inhibit germination.
Plant seeds 1/8 to 1/4 of an inch deep. Lettuce seeds need light to germinate, so don’t sow them too deep. 
Seed may be sown in single rows or broadcast for wide row planting (loose-leaf varieties are best for this). When broadcasting, thin 1- to 2-inch tall seedlings for the proper spacing.
Spacing between plants depends on the variety:
Loose-leaf lettuce: Plant or thin to 4 inches apart.
Romaine (cos) and butterhead (loose-head, Bibb, Boston) lettuce: Plant or thin to 8 inches apart.
Crisphead (iceberg) lettuce: Plant or thin to 16 inches apart.
Set rows of lettuce 12 to 15 inches apart
Sow additional seeds every 2 weeks for a continuous harvest. 
Consider planting rows of chives or garlic between your lettuce to control aphids. They act as “barrier plants” for the lettuce.
Water thoroughly with a mist nozzle at time of transplanting or seeding.
"</p>
                </div>
            </div>
            <div className="responsive">
            <br />
                <div className="gallery1">
                    <img src={require('../images/lettuce.jpg')} alt="Lettuce" width="400" height="400"/>
                </div>
                <div className="desc1">Recommendation 2: Lettuce
                <br /> <br />
                <p>&#9829; Season: Fall</p>
                <p>&#9829; Climate: Warm</p>
                <p>&#9829; Soil type: Sandy</p>
                <p>&#9829; Location: Backyard</p>
                <p>&#9829; Difficulty to Grow: Easy</p>
                <p>&#9829; Toxic for Pets? No</p>
                <p>&#9829; Instructions to grow: "Sow bush beans 1 inch deep and 2 inches apart in rows 18 inches apart.
Sow pole beans 1 inch deep, placing them around supports.
Tip: Plant pole and bush beans a little deeper in sandy soils, but not too deep. Seedlings cannot push through soil that is too deep, heavy, dense, packed, and/or mulched; they will break their “necks” in trying to emerge.
For pole beans, set up trellises, stakes, or other supports prior to planting so that the plants’ fragile roots are not disturbed.
One option is to create a tepee: Tie three or four (or more) 7-foot-long bamboo poles or long, straight branches together at the top and splay the legs in a circle. Then plant three or four seeds around each pole. As vines appear, train them to wind up the poles. For more stability, wrap string/wire around the poles about halfway up, encircling the tepee; this gives the vines something to grab.
Another easy support for them is a “cattle panel”—a portable section of wire fence—16 feet long and 5 feet tall. The beans will climb with ease and you won’t have to get into contorted positions to pick them.
For a continued harvest that lasts all summer, sow seeds every 2 weeks. If you’re going to be away and unable to harvest, skip a planting. Beans do not wait for anyone!
Practice crop rotation (planting crops in different areas each year) to avoid the build up of pests and diseases in one spot
"</p>
                </div>
            </div>
            <div className="responsive">
            <br />
                <div className="gallery1">
                    <img src={require("../images/zucchini-crop.jpg")} alt="Zucchini" width="400" height="400"/>
                </div>
                <div className="desc1">Recommendation 3: Zucchini
                <br /> <br />
                <p>&#9829; Season: Summer</p>
                <p>&#9829; Climate: Warm</p>
                <p>&#9829; Soil type: Sticky</p>
                <p>&#9829; Location: Backyard or Patio</p>
                <p>&#9829; Difficulty to Grow: Medium</p>
                <p>&#9829; Toxic for Pets? No</p>
                <p>&#9829; Instructions to grow: "Zucchini plants can be grown from young plants or seeds. Starting with strong young zucchini plants like those from Bonnie Plants® automatically puts you closer to harvest, plus is a great solution when you get a late start on planting. When starting with seeds, they should be sown directly in the garden after all chance of frost has passed. Because the seeds sprout and grow so quickly, there is really no need, even in the coolest gardening areas, to start seeds indoors. 

When the soil has warmed up in your planting beds, plant seeds one-half inch deep, 3 to 4 inches apart, in rows that are 2 to 3 feet apart. Thin plants so that they are spaced 6 to 8 inches apart once they are 4 to 5 inches tall. 

Another option is to plant 2 or 3 seeds (bush-style plants work best) in a container that is at least 20 inches in diameter. Once seedlings are a few inches tall, trim two off at the soil line, leaving only the strongest looking plant to grow."</p>
                </div>
            </div>
        </div>
    );
}

export default Recs;