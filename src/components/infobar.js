import React, { useState} from 'react';

const InfoBar = ({dataset}) => {
  const [heat, setHeat] = useState('heatSpecific');
  const [radius, setRadius] = useState('calcAtomRad');
  const [cond, setCond] = useState('condElectric');
  const [ioniz, setIoniz] = useState('ionFirst');
  const selectHeat = (e) => setHeat(e.target.value);
  const selectRadius = (e) => setRadius(e.target.value);
  const selectCond = (e) => setCond(e.target.value);
  const selectIoniz = (e) => setIoniz(e.target.value);

  const clearGroupHighlight = (e) => {
    let boxes = [...document.getElementsByClassName('muteBox')];
    boxes.forEach(box => box.classList.remove('muteBox') )
  }

  const highlightGroup = (e) => {
    let boxes = [...document.getElementsByClassName('box')];
    let reg = new RegExp('\\b' + e.target.id + '\\b')
    
    boxes.forEach(box => {
      if (!box.className.match(reg)) {
        box.classList.add('muteBox')
      }
    })
  }

  return (
    (dataset.length === 0)
      ? <div className="elem info">
        <div onMouseOver={highlightGroup} onMouseOut={clearGroupHighlight} className="info-group">
          <div className="group" id="metal">metals</div>
          <div className="group" id="metalloid" >metalloids</div>
          <div className="group" id="nonmetal">non metals</div>
        </div>
        <div onMouseOver={highlightGroup} onMouseOut={clearGroupHighlight} className="info-group">
          <div className="group" id="alkali">alkali metals</div>
          <div className="group" id="alkaline">alkaline earth metals</div>
          <div className="group" id="transition">transition metals</div>
          <div className="group" id="post_transition">post transition metals</div>
          <div className="group" id="actinoid">actanides</div>
          <div className="group" id="lanthanoid">lanthanides</div>
        </div>
        <div onMouseOver={highlightGroup} onMouseOut={clearGroupHighlight} className="info-group">
          <div className="group" id="react_nonmetal">reactive nonmetals</div>
          <div className="group" id="noble">noble gases</div>
        </div>
      </div>

      : <div className="elem info">
          <div className="elem info-box" id='left_info'>
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
                <select className="elem" onChange={selectHeat}>
                  <option value='heatSpecific' default>Specific (J/kgK)</option>
                  <option value='heatFusion'>Fusion (kJ/mol)</option>
                  <option value='heatVapor'>Vaporization (kJ/mol)</option>
                </select> 
              </span>
              <span>{dataset[0][heat]}</span>
            </div>
          </div>
          <div className="elem info-box" id='right_info'>
            <br/>
            <div className='spaced'>
              <span>Electronegativity: </span>
              <span>{dataset[0].electroneg}</span>
            </div>
            <div className='spaced'>
              <span>
                Ionization (kJ/mol), 
                <select className="elem" onChange={selectIoniz}>
                  <option value='ionFirst'>1st</option>
                  <option value='ionSecond'>2nd</option>
                </select>
              </span>
              <span>{dataset[0][ioniz]}</span>
            </div>
            <div className='spaced'>
              <span>
                Atomic Radius (pm), 
                <select className="elem" onChange={selectRadius}>
                  <option value='calcAtomRad' default>calc</option>
                  <option value='empAtomRad'>emp</option>
                </select>
              </span>
              <span>{dataset[0][radius]}</span>
            </div>
            <div className='spaced'>
              <span>
                Conductivity
                <select className="elem" onChange={selectCond}>
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

export default InfoBar;