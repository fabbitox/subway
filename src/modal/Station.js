import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Station.module.css';

const Station = (props) => {
    const code = props.code;
    const [infotag, setInfo] = useState(0);
    useEffect(() => {
        axios.get(`http://10.125.121.185:8080/station/${code}`).then(response => {
            console.log(response.data);
            const info = response.data[0];
            setInfo(<div>
                <div><span>{info.line_num}</span><span className={style.blank}></span><span>{info.stationcode} {info.stationname_plus}({info.english_name})</span></div>
                <div>전화번호: {info.tel}</div>
                <div>주소: {info.address}</div>
                <div>유래: {info.history}</div>
            </div>);
        }).catch(error => console.log(error));
    }, [code]);
    return (
        <div className={style.vspace}>
            <strong className={style.large}>역 정보</strong>
            {infotag !== 0 && infotag}
        </div>
    );
}

export default Station