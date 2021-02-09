import React from 'react';

const ElementInfo = ({dataset}) => {
  return (
    (dataset.length === 0)
      ? <div className="info"></div>
      : <div className="info">
          <div>
            <span>Name: {dataset[0].name}</span><br/>
            <span>MW: {dataset[0].mwt}</span><br/>
            <span>Boiling Pt (&#8451;): {dataset[0].boilPt}</span><br/>
            <span>Melting Pt (&#8451;): {dataset[0].meltPt}</span><br/>
          </div>
          <div>
            <span>Density (g/cm<sup>3</sup>): {dataset[0].density}</span><br/>
            <span>Electronegativity: {dataset[0].electroneg}</span><br/>
            <span>Atomic Radius, calc (pm): {dataset[0].calcAtomRad}</span><br/>
            <span>Atomic Radius, emp (pm): {dataset[0].empAtomRad}</span><br/>
          </div>
        </div> 
  )
};

export default ElementInfo;