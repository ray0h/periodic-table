import React from 'react';
import Box from './box';
import elements from '../db/elements';
import periods from '../db/periods';

const Table = ({ data, dataset, elemSetter, elemId }) => {
  const dset = dataset.filter(elem => elem.id === Number(elemId));

  return (
    <div className="table" >
       {(dset.length === 0)
          ? <div className="info"></div> 
          : <div className="info">
            <div>
              <span>Name: {dset[0].name}</span><br/>
              <span>MW: {dset[0].mwt}</span><br/>
              <span>Boiling Pt (&#8451;): {dset[0].boilPt}</span><br/>
              <span>Melting Pt (&#8451;): {dset[0].meltPt}</span><br/>
            </div>
            <div>
              <span>Density (g/cm<sup>3</sup>): {dset[0].density}</span><br/>
              <span>Electronegativity: {dset[0].electroneg}</span><br/>
              <span>Atomic Radius, calc (pm): {dset[0].calcAtomRad}</span><br/>
              <span>Atomic Radius, emp (pm): {dset[0].empAtomRad}</span><br/>
            </div>
          </div> }
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
