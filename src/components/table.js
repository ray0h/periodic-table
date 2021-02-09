import React from 'react';
import Box from './box';
import ElementInfo from './elementInfo';
import Label from './label';
import elements from '../db/elements';
import periods from '../db/periods';

const Table = ({ data, dataset, elemSetter, elemId }) => {
  const dset = dataset.filter(elem => elem.id === Number(elemId));
  const glabels = Array.from(Array(18), (_, i) => i+1);
  const plabels = [1,2,3,4,5,6,7,6,7]
  return (
    <div className="table" >
      <ElementInfo dataset={dset}/>
      
      { 
        glabels.map((group,ind) => {
          let style = { gridArea: `h${ind+1}`}
          return ( <Label key={`h${ind}`} style={style} label={group}/>)
        })
      }
      {
        plabels.map((period, ind) => {
          let style = { gridArea: `v${ind+1}`}
          return( <Label key={`v${ind}`} style={style} label={period}/>)
        })
      }
      {
        periods.map((id)=> {
          let element = elements.filter(e=> e.id === id);
          let dat = data.filter(e => e.id === id);
          return (
            <Box key={id} element={element.length === 0 ? null : element[0]} data={dat.length === 0 ? null : dat[0] } elemSetter={elemSetter}/>
          )
        })
      }
    </div>
  )
};

export default Table;
