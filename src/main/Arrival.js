import React from 'react'

const Arrival = (props) => {
    const arrivals = props.arrival;
    return (
        <div>{arrivals[0]} {arrivals[1]} {arrivals[2]}</div>
    )
}

export default Arrival