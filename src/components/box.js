import React from 'react';

const Box = ({ element, data }) => {
  function highlight(e) {
    if (e.currentTarget.id >= 1 && e.currentTarget.id < 119) {
      console.log(e.currentTarget.id)
      let prev = document.getElementsByClassName('highlight')[0];
      if (prev) {
        prev.classList.remove('highlight');
      }
      let box = document.getElementById(e.currentTarget.id);
      box.classList.add('highlight');
    }
  }
  return (
    <div id={element ? element.id : ''} className={element ? 'box ' + element.group.join(' '): 'empty'} onClick={highlight}>
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