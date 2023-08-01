import style from './Line2.module.css';
import axios from 'axios';
import Arrival from '../../modal/Arrival';
import { useState } from 'react';
import Modal from '../../modal/Modal';

const Line2 = (props) => {
    const [arrival3, setArrival] = useState([]);
    const [open, setOpen] = useState(false);
    const select = (code) => {
        setOpen(true);
        console.log(`http://10.125.121.185:8080/station/${props.day.split(':')[1]}/${props.end.split(':')[1]}/${code}`);
        axios.get(`http://10.125.121.185:8080/station/${props.day.split(':')[1]}/${props.end.split(':')[1]}/${code}`)
            .then(response => {
                let arrivals = response.data;
                arrivals.sort((a, b) => {
                    const as = a.split(':');
                    const bs = b.split(':');
                    let ah = parseInt(as[0]);
                    if (ah === 0)
                        ah = 24;
                    const am = parseInt(as[1]);
                    let bh = parseInt(bs[0]);
                    if (bh === 0)
                        bh = 24;
                    const bm = parseInt(bs[1]);
                    if (ah === bh) {
                        return am - bm;
                    }
                    return ah - bh;
                });
                console.log(arrivals);
                arrivals = arrivals.filter((item) => {
                    const time = new Date();
                    const hournow = time.getHours();
                    const minutenow = time.getMinutes();
                    const hourmin = item.split(':');
                    let arrivehour = parseInt(hourmin[0]);
                    if (arrivehour === 0)
                        arrivehour = 24;
                    const arrivemin = parseInt(hourmin[1]);
                    if (arrivehour === hournow) {
                        return arrivemin >= minutenow;
                    } else if (arrivehour >= hournow) {
                        return true;
                    }
                    return false;
                });
                if (arrivals.length >= 3) {
                    setArrival(arrivals.slice(0, 3));
                }
                else {
                    setArrival(arrivals);
                }
            }).catch(error => console.log(error));
    }

    let buttons = [];
    for (let i = 0; i < 43; i++)
        buttons.push(
            <button className={style.station + ((i === 4 || i === 7 || i === 18 || i === 26 || i === 32) ? ' ' + style.big : '')}
            key={201 + i} onClick={() => select(201 + i)}></button>
        );
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div>
            <div className={style.map}>
                {buttonrow}
            </div>
            {arrival3.length !== 0 && <Arrival arrival={arrival3} />}
            {open && <Modal open={setOpen} line={2} />}
        </div>
    );
}

export default Line2;