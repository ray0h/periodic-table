import React from 'react';

const Box = ({ element, data }) => {
  return (
    <div className={element ? 'box ' + element.group.join(' '): 'empty'}>
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