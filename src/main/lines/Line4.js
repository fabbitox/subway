import style from './Line4.module.css';

const Line4 = (props) => {
    const select = (code) => {
        console.log('select', props.day, props.end.split(':')[1], code);
    }

    let buttons = [];
    for (let i = 0; i < 14; i++)
        buttons.push(
            <button className={style.station + ((i >= 12) ? ' ' + style.big : '')}
            key={414 - i} onClick={() => select(414 - i)}></button>
        );
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line4;