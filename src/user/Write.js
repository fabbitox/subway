import React, { useState } from 'react';
import userst from './User.module.css';
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Write = () => {
    const code = useParams().code;
    const [selfile, setFile] = useState(null);
    const fileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const submit = () => {
        const formData = new FormData();
        formData.append('file', selfile);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('stationcode', code);
        axios.post('http://10.125.121.185:8080/board/create', formData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('글쓰기 실패', error);
        });
    }
    return (
        <div className={userst.center}>
            <Helmet><title>부산 지하철 | 게시글 쓰기</title></Helmet>
            <label htmlFor='title'>제목</label>
            <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)}></input>
            <label htmlFor='content'>내용</label>
            <input type='text' id='content' value={content} onChange={e => setContent(e.target.value)}></input>
            <input type="file" onChange={e => fileChange(e)} />
            <button onClick={submit}>글쓰기</button>
        </div>
    )
}

export default Write;