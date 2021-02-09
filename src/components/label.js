import React from 'react';

function Label({style, label}) {
  return (
    <div className='label' style={style}>{label}</div>
  )
};

export default Label;