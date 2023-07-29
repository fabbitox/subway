import style from './Select.module.css';
import main from './Main.module.css';
import { useState, useEffect } from 'react';
import Line1 from './lines/Line1';
import Line2 from './lines/Line2';
import Line3 from './lines/Line3';
import Line4 from './lines/Line4';

const Select = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => setTime(new Date()), 10000);
    const getDayType = (weekday) => {
        return weekday === 0 ? '일요일' : weekday === 6 ? '토요일' : '평일';
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
    const linebtns = lines.map((item, idx) =>
        <button onClick={() => setline(idx)}
        className={classnames[idx] + ' ' + style.line + ' ' + main.large
        + (idx === line ? ' ' + style.selected : '')} key={lines[idx]}>
            {item}
        </button>
    );
    const [endidx, setend] = useState(-1);
    const end = [['노포:134', '신평:101', '다대포해수욕장:095'], ['장산:201', '광안:209', '전포:219', '호포:239', '양산:243'],
        ['수영:301', '대저:317'], ['안평:414', '미남:401']];
    const endbtns = end.map((lineend, lineidx) => lineend.map(
        (item, idx) => <button key={item} onClick={() => setend(idx)}
            className={style.end + ' ' + classnames[lineidx] + ' ' + main.normal
            + (idx === endidx ? ' ' + style.selected : '')}>
            {item.split(':')[0]}
        </button>)
    );
    const linemap = [<Line1></Line1>, <Line2></Line2>, <Line3></Line3>, <Line4></Line4>];
    const totalmap = <img src='img/종합노선도(Metro Line Map).png' alt='종합노선도'></img>

    useEffect(() => {
        setend(-1);
    }, [line]);

    return (
        <>
            <div><strong className={main.left + ' ' + main.xlarge}>출발역과 방향을 선택하세요</strong>{linebtns}</div>
            <div className={main.up}>
                <strong className={main.large + ' ' + main.left}>{getDayType(time.getDay())} {timeformat(time)}</strong>
                {line !== -1 && endbtns[line]}
            </div>
            {line === -1 ? totalmap : endidx !== -1 && linemap[line]}
        </>
    );
}

export default Select;