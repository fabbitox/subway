import style from './Line1.module.css';

const Line1 = () => {
    let buttons = [];
    for (let i = 0; i < 40; i++) {
        if ((i >= 9 && i <= 11) || i === 15) buttons.push(<button className={style.big + ' ' + style.station}></button>);
        else buttons.push(<button className={style.station}></button>);
    }
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div className={style.map}>
            {buttonrow}
        </div>
    );
}

export default Line1;