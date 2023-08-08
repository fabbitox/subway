import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    &:hover {
        color: #6600cc;
        font-weight: bold;
    }
`;

const Accordian = (props) => {
    let list = props.list;
    const [index, setIndex] = useState(-1);
    const accordian = list.map((item, idx) => 
        <Div key={'board' + item.id} onClick={() => setIndex(idx)}>
            <span style={{width: '2.5rem', display: 'inline-block'}}>{item.id}</span>
            <span style={{width: '14rem', display: 'inline-block'}}>{item.title}</span>
            <span style={{width: '8rem', display: 'inline-block'}}>{item.author}</span>
            {index === idx ? <div style={{marginLeft: '2.5rem', color: 'black'}}>{item.content}</div> : <></>}
        </Div>
    );
    return (
        <>{accordian}</>
    )
}

export default Accordian;