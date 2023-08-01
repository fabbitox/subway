import style from './Line2.module.css';
import axios from 'axios';
import Arrival from '../../modal/Arrival';
import { useState } from 'react';
import Modal from '../../modal/Modal';
import Station from '../../modal/Station';
import get3Arrivals from './Line';

const Line2 = (props) => {
    const [arrival3, setArrival] = useState([]);
    const [code, setCode] = useState(0);
    const [open, setOpen] = useState(false);
    const select = (code) => {
        setOpen(true);
        setCode(code);
        console.log(`http://10.125.121.185:8080/station/${props.day.split(':')[1]}/${props.end.split(':')[1]}/${code}`);
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
    for (let i = 0; i < 43; i++)
        buttons.push(
            <button className={style.station + ((i === 4 || i === 7 || i === 18 || i === 26 || i === 32) ? ' ' + style.big : '')}
            key={201 + i} onClick={() => select(201 + i)}></button>
        );
    const buttonrow = <div className={style.row}>{buttons}</div>;
    const info = <>{arrival3.length !== 0 && <Arrival arrival={arrival3} />}
    {code !== 0 && <Station code={code} color='#008a00' />}</>;

    return (
        <div>
            <div className={style.map}>
                {buttonrow}
            </div>
            {open && <Modal open={setOpen} line={2} content={info} />}
        </div>
    );
}

export default Line2;