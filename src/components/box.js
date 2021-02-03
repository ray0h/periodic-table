import React from 'react';

const Box = ({ element, data, cname }) => {
  return (
    <div className={element ? 'box' : 'empty'}>
      <div className="idcont">
        <div className="number">{element ? element.id : ''}</div>
        <div className="symbol">{element ? element.symbol : ''}</div>
      </div>
      <div className="datacont">
        <div className="name">{element ? element.name : ''}</div>
        <div className="data">{data ? data.data : ''}</div>
      </div>
    </div>
  )
}

export default Box;