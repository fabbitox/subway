import style from './Modal.module.css';
import styled from 'styled-components';
import { useEffect } from 'react';

const colors = ['#f7612f', '#20ac15', '#b58942', '#286fdb'];
const Container = styled.div`
    width: 70%;
    height: 84%;
    z-index: 10;
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    border-radius: 0.8rem;
    border: 0.3rem solid ${props => colors[props.line]};
    padding: 2% 5%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const CloseBtn = styled.button`
    position: fixed;
    right: 12%;
    top: 6%;
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
        border: 0.2rem solid ${props => colors[props.line]};
    }
    z-index: 11;
`;

const Modal = (props) => {
    const setOpen = props.open;
    const close = () => {
        setOpen(false);
    }
    const block = (event) => {
        event.stopPropagation();
    };
    useEffect(() => {
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);
    const line = props.line;
    return (
        <div className={style.out} onClick={close}>
            <CloseBtn line={line - 1} onClick={close}>X</CloseBtn>
            <Container line={line - 1} onClick={block}>
                {props.content}
            </Container>
        </div>
    )
}

export default Modal;