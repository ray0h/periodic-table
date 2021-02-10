import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Box = ({ element, data, elemSetter }) => {

  const highlight = (e) => {
    let prev = document.getElementsByClassName('highlight')[0];
    if (prev) { prev.classList.remove('highlight'); }
    if (e.currentTarget.id >= 1 && e.currentTarget.id < 119) {
      elemSetter(e.currentTarget.id)
      let box = document.getElementById(e.currentTarget.id);
      box.classList.add('highlight');
    } else {
      elemSetter(0)
    }
  };
  
  return (
    <div id={element ? element.id : uuidv4()} className={element ? 'elem box ' + element.group.join(' '): 'empty'} onClick={highlight} style={element ? { gridArea:'g'+element.id } : {}}>
      <div className="elem idcont">
        <div className ="elem" style = { (element && element.id > 99) ? { fontSize: 12 } : {fontSize: 14 } }>{element ? element.id : ''}</div>
        <div className="elem symbol">{element ? element.symbol : ''}</div>
      </div>
      <div className="elem datacont">
        <div className="elem name" style = { (element && element.name.length < 10) ? { fontSize: 9 } : { fontSize: 7 } }>{element ? element.name : ''}</div>
        <div className="elem" style={{fontSize: 11}}>{data ? data.data : ''}</div>
      </div>
    </div>
  )
};

export default Box;