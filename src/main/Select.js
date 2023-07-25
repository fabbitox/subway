import style from './Select.module.css';
import { useState } from 'react';

const Select = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 30000);

    const getDayType = (weekday) => {
        return weekday == 0 ? '공휴일' : weekday == 6 ? '토요일' : '평일';
    }

    return (
        <main>
            <header><h1>부산 지하철 정보</h1></header>
            <div>역을 선택하세요<span className={style.blank}></span><select id='lineno' name='lineno'>
                <option value=''>호선 선택</option>
                <option value='1'>1호선</option>
                <option value='2'>2호선</option>
                <option value='3'>3호선</option>
                <option value='4'>4호선</option>
            </select></div>
            <div>{getDayType(time.getDay())} {time.getHours()}:{time.getMinutes()}</div>
        </main>
    );
}

export default Select;