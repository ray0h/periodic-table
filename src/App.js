import React, { useState, useCallback } from 'react';
import Table from './components/table';
import dataset from './db/data';
import './App.css';

function App() {
  const [ data, setData ] = useState(dataset.map(elemId => ({id: elemId.id, data: elemId['mwt']}) ));
  const [ elemId, setElemId ] = useState(0);
  
  const selectData = (e) => setData(dataset.map(elemId => ({ id: elemId.id, data: elemId[e.target.value]}) ));
  const elemSetterWrapper = useCallback(val => {
    setElemId(val);
  }, [setElemId]);
  const clearHighlight = (e) => {
    if (!e.target.className.includes('elem')) {
      let prev = document.getElementsByClassName('highlight')[0];
      if (prev) { prev.classList.remove('highlight'); }
      setElemId(0);
    }
  };

  return (
    <div className="App" style={{width: '90%', margin: 'auto'}} onClick={clearHighlight}>
      <div style={{marginLeft: 30, marginBottom: 10}}>
        <h1>Periodic Table</h1>
        <span>
          Data: 
          <select className="elem" id="dataSelection" onChange={selectData}>
            <option value="mwt" default>Molecular Weight</option>
            <option value="boilPt">Boiling Pt</option>
            <option value="meltPt">Melting Pt</option>
            <option value="density">Density</option>
            <option value="electroneg">Electronegativity</option>
            <option value="empAtomRad">Emp Atomic Radii</option>
            <option value="calcAtomRad">Calc Atomic Radii</option>
            <option value="ionFirst">First Ionization Energy</option>
            <option value="ionSecond">Second Ionization Energy</option>
            <option value="condElectric">Electrical Conductivity</option>
            <option value="condThermal">Thermal Conductivity</option>
            <option value="oxidState">Common Oxid States</option>
          </select>
        </span>
      </div>
        
      <Table data={data} dataset={dataset} elemSetter={elemSetterWrapper} elemId={elemId} />
    </div>
  );
};

export default App;
