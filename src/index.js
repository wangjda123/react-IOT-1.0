/*
入口js
 */
import React from 'react'
import ReactDom from 'react-dom'
// import 'antd/dist/antd.css'
import App from './App'
import memoryUtils from "./utils/memoryUtils";
import storageUtils from "./utils/storageUtils";


const user = storageUtils.getUser()
memoryUtils.user = user
ReactDom.render(<App />,document.getElementById('root'))