import style from './Line1.module.css';

const Line1 = () => {
    let buttons = [];
    for (let i = 0; i < 40; i++) {
        if ((i >= 9 && i <= 11) || i === 15) buttons.push(<button className={style.big}></button>);
        else buttons.push(<button></button>);
    }
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div>
            <img src={'img/1호선 노선도(Line 1 Map).png'} alt='1호선 노선도'></img>
            {buttonrow}
        </div>
    );
}

export default Line1;