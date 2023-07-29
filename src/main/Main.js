import React from 'react'
import style from './Main.module.css'
import Select from './Select'

const Main = () => {
  return (
    <main>
        <header><h1 className={style.center}>부산 지하철 정보</h1></header>
        <Select></Select>
    </main>
  )
}

export default Main