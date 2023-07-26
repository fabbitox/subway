import style from './Line4.module.css';

const Line4 = () => {
    let buttons = [];
    for (let i = 0; i < 14; i++) {
        if (i >= 12) buttons.push(<button className={style.big}></button>);
        else buttons.push(<button></button>);
    }
    const buttonrow = <div className={style.row}>{buttons}</div>;

    return (
        <div>
            <img src={'img/4호선 노선도(Line 4 Map).png'} alt='4호선 노선도'></img>
            {buttonrow}
        </div>
    );
}

export default Line4;