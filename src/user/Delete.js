import React from 'react';
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/');
    const id = useParams().id;
    axios.delete(`${process.env.REACT_APP_BASEURL}/board/delete/${id}`, {headers: {Authorization: localStorage.getItem('accesstoken')}})
    .then((response) => {
        if (response.data === "게시글 삭제 성공") {
            goHome();
        }
    }).catch((error) => {
        alert('삭제 실패');
        goHome();
    });
    return (
        <Helmet><title>부산 지하철 | 게시글 삭제</title></Helmet>
    )
}

export default Delete