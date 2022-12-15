import React, { useEffect, useState } from "react";



const Home = () => {

    const [events, setEvents] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const data = await (await fetch('https://valorant-api.com/v1/bundles')).json()

            console.log(data)
            setEvents(data.data)

        }

        fetchData().catch(console.error)
    }, [])

    const renderEvents = () => {
        return events.map((value, key) => 
            <div key={value.uuid} className="eventCards" style={{
                backgroundImage: `url(${value.displayIcon})`
            }}>

            </div>
        

        )
            
    }

    return (
        <div className="eventGrid">
            {renderEvents()}
        </div>
    )
}


export { Home }