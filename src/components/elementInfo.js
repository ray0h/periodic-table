import React, { useState} from 'react';

const ElementInfo = ({dataset}) => {
  const [heat, setHeat] = useState('heatSpecific');
  const [radius, setRadius] = useState('calcAtomRad');
  const [cond, setCond] = useState('condElectric');
  const [ioniz, setIoniz] = useState('ionFirst');
  const selectHeat = (e) => setHeat(e.target.value);
  const selectRadius = (e) => setRadius(e.target.value);
  const selectCond = (e) => setCond(e.target.value);
  const selectIoniz = (e) => setIoniz(e.target.value);

  return (
    (dataset.length === 0)
      ? <div className="info"></div>
      : <div className="info">
          <div id='left_info'>
            <span style={{color: 'red'}}>Name: {dataset[0].name}</span><br/>
            <div className='spaced'>
              <span>MW: (amu) </span>
              <span>{dataset[0].mwt}</span>
            </div>
            <div className='spaced'>
              <span>Boiling Pt (&#8451;): </span>
              <span>{dataset[0].boilPt}</span>
            </div>
            <div className='spaced'>
              <span>Melting Pt (&#8451;): </span>
              <span>{dataset[0].meltPt}</span>
            </div>
            <div className='spaced'>
              <span>Density (g/cm3): </span>
              <span>{dataset[0].density}</span>
            </div>
            <div className='spaced'>
              <span>
                Heat,  
                <select onChange={selectHeat}>
                  <option value='heatSpecific' default>Specific (J/kgK)</option>
                  <option value='heatFusion'>Fusion (kJ/mol)</option>
                  <option value='heatVapor'>Vaporization (kJ/mol)</option>
                </select> 
              </span>
              <span>{dataset[0][heat]}</span>
            </div>
          </div>
          <div id='right_info'>
            <br/>
            <div className='spaced'>
              <span>Electronegativity: </span>
              <span>{dataset[0].electroneg}</span>
            </div>
            <div className='spaced'>
              <span>
                Ionization Energy (kJ/mol), 
                <select onChange={selectIoniz}>
                  <option value='ionFirst'>1st</option>
                  <option value='ionSecond'>2nd</option>
                </select>
              </span>
              <span>{dataset[0][ioniz]}</span>
            </div>
            <div className='spaced'>
              <span>
                Atomic Radius (pm), 
                <select onChange={selectRadius}>
                  <option value='calcAtomRad' default>calc</option>
                  <option value='empAtomRad'>emp</option>
                </select>
              </span>
              <span>{dataset[0][radius]}</span>
            </div>
            <div className='spaced'>
              <span>
                Conductivity
                <select onChange={selectCond}>
                  <option value='condElectric' default>elec. (mS/m)</option>
                  <option value='condThermal'>therm. (W/mK)</option>
                </select>
              </span>
              <span>{dataset[0][cond]}</span>
            </div>
            <div className='spaced'>
              <span>Common Oxid States: </span>
              <span>{dataset[0].oxidState}</span>
            </div>
          </div>
        </div> 
  )
};

export default ElementInfo;