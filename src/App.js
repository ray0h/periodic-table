import React, { useState, useCallback } from 'react';
import Table from './components/table';
import dataset from './db/data';
import './App.css';

function App() {
  const [ data, setData ] = useState(dataset.map(elemId => ({id: elemId.id, data: elemId['mwt']}) ));
  const [ elemId, setElemId ] = useState(0);
  
  const elemSetterWrapper = useCallback(val => {
    setElemId(val);
  }, [setElemId]);

  const selectData = (e) => {
    setData(dataset.map(elemId => ({ id: elemId.id, data: elemId[e.target.value]}) ));
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <div style={{marginLeft: 30, marginBottom: 10}}>
          <h1>Periodic Table</h1>
          <select id="dataSelection" onChange={selectData}>
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
        </div>
        
        <Table data={data} dataset={dataset} elemSetter={elemSetterWrapper} elemId={elemId} />
      </div>
    </div>
  );
};

export default App;
