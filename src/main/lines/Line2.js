import style from './Line2.module.css';

const Line2 = (props) => {
    const select = (code) => {
        console.log('select', props.day, props.end.split(':')[1], code);
    }

    let buttons = [];
    for (let i = 0; i < 43; i++)
        buttons.push(
            <button className={style.station + ((i === 4 || i === 7 || i === 18 || i === 26 || i === 32) ? ' ' + style.big : '')}
            key={201 + i} onClick={() => select(201 + i)}></button>
        );
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line2;