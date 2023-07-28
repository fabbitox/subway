import style from './Line2.module.css';

const Line2 = () => {
    let buttons = [];
    for (let i = 0; i < 43; i++) {
        if (i === 4 || i === 7 || i === 18 || i === 26 || i === 32) buttons.push(<button className={style.big + ' ' + style.station}></button>);
        else buttons.push(<button className={style.station}></button>);
    }
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line2;