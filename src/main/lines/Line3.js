import style from './Line3.module.css';

const Line3 = () => {
    const select = (code) => {
        console.log('select', code);
    }

    let buttons = [];
    for (let i = 0; i < 17; i++)
        buttons.push(
            <button className={style.station + ((i % 4 === 0 || i === 5) ? ' ' + style.big : '')}
            key={301 + i} onClick={() => select(301 + i)}></button>
        );
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line3;