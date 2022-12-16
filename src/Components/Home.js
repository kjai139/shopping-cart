import React, { useEffect, useState } from "react";



const Home = ({events}) => {

    const [showItemsNum, setShowItemsNum] = useState(9)

    const renderEvents = () => {
        return events.slice(0, showItemsNum).map((value, key) => 

        <div key={events[0] ? value.uuid : ""} style={{
            backgroundImage: `${events[0] ? `url(${value.displayIcon})` : ''}`
        }} className="eventCards">
            <p className="cardTxt">{events[0] ? value.description : "Loading..."}</p>
            
        </div>
        

        )
            
    }


    const filler = () => {
        <div key={events[0] ? events[0].uuid : ""} style={{
            backgroundImage: `${events[0] ? `url(${events[0].displayIcon})` : ''}`
        }} className="eventCards">
            <p>${events[0] ? events[0].description : "Loading..."}</p>
            
        </div>
    }

    

    return (
        <div className="eventGrid">
            {renderEvents()}
            

        </div>
            
        
    )
}


export { Home }