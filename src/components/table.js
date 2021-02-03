import React from 'react';
import Box from './box';
import elements from './elements';
import periods from './periods';

const Table = ({ dataset }) => {
  return (
    <div className="table">
      {
        periods.map((period, ind)=> {
          let style 
          if (ind === 6) {
            style = { marginBottom: 15 };
          } else if (ind === 8) {
            style = { marginBottom: 20 };
          } else {
            style = { };
          };

          return (
            <div className="period" style={style} >
              {period.map(id => {
              let element = elements.filter(element => element.id === id);
              let data = dataset.filter(data => data.id === id);
              return <Box key={id} element={element.length === 0 ? null : element[0]} data={data.length === 0 ? null : data[0]} />
            })}
          </div>
          )
        })
      }
    </div>
  )
};

export default Table;
