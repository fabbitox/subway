import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import style from './Station.module.css';
import styled from 'styled-components';

const ColorSpan = styled.span`
    font-weight: bold;
    color: ${props => props.color};
`;
const SpanBtn = styled.span`
    &:hover {
        font-weight: bold;
        color: ${props => props.color};
    }
`;

const Station = (props) => {
    const code = props.code;
    const color = props.color;
    const [infotag, setInfo] = useState(0);
    const [show, toggle] = useState(false);
    useEffect(() => {
        axios.get(`http://10.125.121.185:8080/station/${code}`).then(response => {
            console.log(response.data);
            const info = response.data[0];
            setInfo(<div>
                <div><ColorSpan color={color}>{info.line_num}</ColorSpan><span className={style.blank}></span>
                <span>{info.stationcode} <ColorSpan color={color}>{info.stationname_plus}</ColorSpan>({info.english_name})</span></div>
                <div><strong>전화번호</strong>: {info.tel}</div>
                <div><strong>주소</strong>: {info.address}</div>
                <SpanBtn color={color} onClick={() => toggle(!show)}>유래</SpanBtn>
                {show ? <span>: {info.history}</span> : <span> ← Click!</span>}
            </div>);
        }).catch(error => console.log(error));
    }, [code, color, show]);
    return (
        <div className={style.vspace}>
            <strong className={style.large}>역 정보</strong>
            {infotag !== 0 && infotag}
        </div>
    );
}

export default Station