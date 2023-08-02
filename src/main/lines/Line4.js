import style from './Line4.module.css';
import axios from 'axios';
import { useState } from 'react';
import get3Arrivals from './Line';
import Modal from '../../modal/Modal';
import Arrival from '../../modal/Arrival';
import Station from '../../modal/Station';
import Facility from '../../modal/Facility';

const Line4 = (props) => {
    const [arrival3, setArrival] = useState([]);
    const [code, setCode] = useState(0);
    const [open, setOpen] = useState(false);
    const select = (code) => {
        setOpen(true);
        setCode(code);
        axios.get(`http://10.125.121.185:8080/station/${props.day.split(':')[1]}/${props.end.split(':')[1]}/${code}`)
            .then(response => {
                const arrivals = get3Arrivals(response.data);
                if (arrivals.length >= 3) {
                    setArrival(arrivals.slice(0, 3));
                }
                else {
                    setArrival(arrivals);
                }
            }).catch(error => console.log(error));
    }

    let buttons = [];
    for (let i = 0; i < 14; i++)
        buttons.push(
            <button className={style.station + ((i >= 12) ? ' ' + style.big : '')}
            key={414 - i} onClick={() => select(414 - i)}></button>
        );
        const buttonrow = <div className={style.row}>{buttons}</div>;
        const info = <>{arrival3.length !== 0 && <Arrival arrival={arrival3} />}
        {code !== 0 && <Station code={code} color='#064db9' />}{code !== 0 && <Facility code={code} />}</>;

    return (
        <div>
            <div className={style.map}>
                {buttonrow}
            </div>
            {open && <Modal open={setOpen} line={4} content={info} />}
        </div>
    );
}

export default Line4;