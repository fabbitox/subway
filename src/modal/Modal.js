import style from './Modal.module.css';
import styled from 'styled-components';

const colors = ['#f7612f', '#20ac15', '#b58942', '#286fdb'];
const Container = styled.div`
    width: 80%;
    height: 90%;
    z-index: 10;
    position: absolute;
    top: 5%;
    left: 10%;
    background-color: white;
    border-radius: 0.8rem;
    border: 0.3rem solid ${props => colors[props.line]};
`;
const CloseBtn = styled.button`
    position: absolute;
    right: 3%;
    top: 3%;
    width: 2rem;
    height: 2rem;
    text-align: center;
    padding: 0;
    color: white;
    border: none;
    border-radius: 0.4rem;
    background-color: ${props => colors[props.line]};
    font-weight: 600;
    font-size: 1.2rem;
    padding-top: 0.1rem;
    &:hover {
        background-color: white;
        color: ${props => colors[props.line]};
        border: 0.15rem solid ${props => colors[props.line]};
    }
`;

const Modal = (props) => {
    const setOpen = props.open;
    const close = () => {
        setOpen(false);
    }
    const line = props.line;

    return (
        <div className={style.out} onClick={close}>
            <Container line={line - 1}>
                <CloseBtn line={line - 1} onClick={close}>X</CloseBtn>
                {props.content}
            </Container>
        </div>
    )
}

export default Modal;