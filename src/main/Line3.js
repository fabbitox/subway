import style from './Line3.module.css';

const Line3 = () => {
    let buttons = [];
    for (let i = 0; i < 17; i++) {
        if (i === 0 || i === 4 || i === 5 || i === 8 || i === 12 || i === 16) buttons.push(<button className={style.big + ' ' + style.station}></button>);
        else buttons.push(<button className={style.station}></button>);
    }
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line3;