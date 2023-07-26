import style from './Line2.module.css';

const Line2 = () => {
    let buttons = [];
    for (let i = 0; i < 43; i++) {
        if (i === 4 || i === 7 || i === 18 || i === 26 || i === 32) buttons.push(<button className={style.big + ' ' + style.station}></button>);
        else buttons.push(<button className={style.station}></button>);
    }
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div>
            <img src={'img/2호선 노선도(Line 2 Map).png'} alt='2호선 노선도' className={style.line2}></img>
            {buttonrow}
        </div>
    );
}

export default Line2;