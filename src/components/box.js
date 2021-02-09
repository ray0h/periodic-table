import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Box = ({ element, data, elemSetter }) => {

  function highlight(e) {
    if (e.currentTarget.id >= 1 && e.currentTarget.id < 119) {
      elemSetter(e.currentTarget.id)
      let prev = document.getElementsByClassName('highlight')[0];
      if (prev) {
        prev.classList.remove('highlight');
      }
      let box = document.getElementById(e.currentTarget.id);
      box.classList.add('highlight');
    }
  };
  
  return (
    <div id={element ? element.id : uuidv4()} className={element ? 'box ' + element.group.join(' '): 'empty'} onClick={highlight} style={element ? { gridArea:'g'+element.id } : {}}>
      <div className="idcont">
        <div className="number" style = { (element && element.id > 99) ? { fontSize: 12 } : {fontSize: 14 } }>{element ? element.id : ''}</div>
        <div className="symbol">{element ? element.symbol : ''}</div>
      </div>
      <div className="datacont">
        <div className="name" style = { (element && element.name.length < 10) ? { fontSize: 9 } : { fontSize: 7} }>{element ? element.name : ''}</div>
        <div className="data">{data ? data.data : ''}</div>
      </div>
    </div>
  )
}

export default Box;