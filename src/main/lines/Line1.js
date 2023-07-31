import style from './Line1.module.css';

const Line1 = (props) => {
    const select = (code) => {
        console.log('select', props.day, props.end.split(':')[1], code);
    }

    let buttons = [];
    for (let i = 0; i < 40; i++)
        buttons.push(
            <button className={style.station + (((i >= 9 && i <= 11) || i === 15) ? ' ' + style.big : '')}
            key={134 - i} onClick={() => select(134 - i)}></button>
        );
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line1;