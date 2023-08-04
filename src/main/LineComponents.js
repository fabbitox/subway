import styled from 'styled-components';
import colors from '../colors';

const color2 = ['#099fd1', '#e054db', '#3b77be', '#d89125'];
const btnW = ['1.7%', '1.6%', '2.1%', '3%'];
const btnH = ['1.7vmax', '1.6vmax', '1.428vmax', '1.5vmax'];
const btnMar = ['15.9vmax 0 13vmax', '17.7vmax 0 12.5vmax', '12.2vmax 0 7.4vmax', '14.7vmax 0 12vmax'];
const bigW = ['2%', '2.1%', '2.7%', '3.8%'];
const bigH = ['2vmax', '2.1vmax', '1.836vmax', '1.9vmax'];
const bigMar = ['15.8vmax 0 13vmax', '17.5vmax 0 12.5vmax', '12vmax 0 7.4vmax', '14.5vmax 0 11.9vmax'];
const rowW = ['98.4%', '98.7%', '96.6%', '95.5%'];
const rowMar = ['0 0.8%', '0 0.7% 0 0.6%', '0 2.1% 0 1.3%', '0 2.2% 0 2.3%'];
const mapUrl = ['./img/line1.png', './img/line2.png', './img/line3.png', './img/line4.png'];
const mapMar = ['0', '0', '0 16%', '0 25%'];

const StationButton = styled.button`
    width: ${props => btnW[props.$line]};
    height: ${props => btnH[props.$line]};
    border: 0.15vmax solid ${props => colors[props.$line]};
    border-radius: 50%;
    background-color: transparent;
    margin: ${props => btnMar[props.$line]};
    padding: 0;
    &:hover {
        background-color: ${props => colors[props.$line]};
        box-shadow: 0 0 0.2vmax 0.2vmax ${props => color2[props.$line]};
    }
`;

const BigButton = styled(StationButton)`
    width: ${props => bigW[props.$line]};
    height: ${props => bigH[props.$line]};
    margin: ${props => bigMar[props.$line]};
`;

const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: ${props => rowW[props.$line]};
    margin: ${props => rowMar[props.$line]};
`;

const MapDiv = styled.div`
    background-image: url(${props => mapUrl[props.$line]});
    background-size: contain;
    margin: ${props => mapMar[props.$line]};
`;

export {StationButton, BigButton, ButtonRow, MapDiv};