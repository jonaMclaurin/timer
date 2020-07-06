import React from 'react';
import ReactDOM from 'react-dom';
import TimeWrapper from './TimeWrapper.jsx'

{/*const element = <div><Tooltip text="The book you're reading now">React Quickly</Tooltip>was published in 2017. It's awesome! </div>*/}

const element = <TimeWrapper/>

ReactDOM.render(element, document.getElementById('contents'));