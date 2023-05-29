import "../styles/events.css";
import React from 'react'
import Boatpic from '../../../src/components/assets/boat-competition.jpg'

function Boat() {
  return (
    <div className="event-container">
        <div className="event-flex-container">
            <div className="event-heading-container">
                <h2>Solar/Electric Boat Competition</h2>
                <img src={Boatpic}></img>
            </div>
            <div className="event-text-container">
            <h2>Rules to be followed for the Solar/Electric Boat Competition</h2><br></br>
1. Teams of Four participants only can contest for this event<br></br>
2. Your battery or solar powered boat should overcome all the obstacles available on the   water track<br></br>
3. The shortest time taken by the solar/electric boat will win the race.<br></br>
4. Width of the canal is half a meter so the boat size can be decided with respect to the width of the canal<br></br>
5. The boat should be electrically wireless <br></br>
6. Either solar or electric boat can be used, But fully SOLAR OPERATED BOAT carries more weightage in marks <br></br>
10. The technical explanation of the parts used in boat should be clearly explained <br></br>
11. Time taken to reach the finish line will be calculated <br></br>
12. The boat should cross the obstacle and reach the finish line within time <br></br>
13. Sensors integration for wind / fire detection are preferred<br></br>
14. The boat should cross the obstacle and reach the finish line within time<br></br>
15. Students should be available in the competition venue before one hour of the commencement of the competition<br></br>
15. Students should pay the Entry fee for mindkraft’23 (Rs.100/-)<br></br>
16. Students should pay the EEE-Event Registration fee (Rs.200/-)<br></br>

            </div>
        </div>
    </div>
  )
}

export default Boat