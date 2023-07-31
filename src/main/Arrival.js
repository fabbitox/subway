import React from 'react'
import style from './Main.module.css'

const Arrival = (props) => {
    let arrivals = props.arrival;
    arrivals = arrivals.map((item) => {
        const time = new Date();
        const arrive = item.split(':');
        let arrivehour = parseInt(arrive[0]);
        if (arrivehour === 0)
            arrivehour = 24;
        const arrivemin = parseInt(arrive[1]);
        const remain = (arrivehour - time.getHours()) * 60 + arrivemin - time.getMinutes();
        return <span key={item}>{`${item}(${remain}분 후)`}<span className={style.blank}></span></span>
    });

    return (
        <span className={style.left}>{arrivals}</span>
    )
}

export default Arrival