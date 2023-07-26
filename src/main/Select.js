import style from './Select.module.css';
import { useState } from 'react';

const Select = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 10000);
    const getDayType = (weekday) => {
        return weekday === 0 ? '공휴일' : weekday === 6 ? '토요일' : '평일';
    }
    const timeformat = (time) => {
        const hour = time.getHours();
        const minute = time.getMinutes();
        let timestr = "";
        if (hour < 10) timestr += '0';
        timestr += hour;
        timestr += ":";
        if (minute < 10) timestr += '0';
        timestr += minute;
        return timestr;
    }

    const classnames = [style.line1, style.line2, style.line3, style.line4];
    const [line, setline] = useState(-1);
    const lines = ['1호선', '2호선', '3호선', '4호선'];
    const btntags = lines.map((item, idx) =>
        <button onClick={() => setline(idx)} className={classnames[idx] + ' ' + style.large + (idx === line ? ' ' + style.selected : '')}>
            {item}
        </button>
    );
    const imgsrcs = ['img/1호선 노선도(Line 1 Map).png', 'img/2호선 노선도(Line 2 Map).png', 'img/3호선 노선도(Line 3 Map).png', 'img/4호선 노선도(Line 4 Map).png'];

    return (
        <main>
            <header><h1 className={style.center}>부산 지하철 정보</h1></header>
            <div><strong className={style.left + ' ' + style.xlarge}>역을 선택하세요</strong>{btntags}</div>
            <div><strong className={style.large + ' ' + style.left}>{getDayType(time.getDay())} {timeformat(time)}</strong></div>
            <div className={style.center}>
                <img src={line === -1 ? 'img/종합노선도(Metro Line Map).png': imgsrcs[line]} alt='노선도 이미지' className={classnames[line]}></img>
            </div>
        </main>
    );
}

export default Select;