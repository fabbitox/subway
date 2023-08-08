import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Modal.module.css'
import Accordian from './Accordian'

const Board = (props) => {
    const code = props.code;
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(`http://10.125.121.185:8080/board/list/${code}`).then((response) => {
            setList(response.data);
        }).catch((error) => console.log(error));
    }, [code]);
    return (
        <>
            <div className={style.vspace} style={{fontWeight: 'bold'}}>게시판</div>
            <Accordian list={list} />
        </>
    )
}

export default Board