import React from 'react'
import style from './Main.module.css'
import Select from './Select'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Main = () => {
    return (
        <main>
            <Helmet><title>부산 지하철 정보</title></Helmet>
            <header><h1 className={style.center}>부산 지하철 정보</h1></header>
            <Link to='/login' className={style.login}>로그인 / 회원가입</Link>
            <Select></Select>
        </main>
    )
}

export default Main