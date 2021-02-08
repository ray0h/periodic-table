import React, { useState, useCallback, useEffect } from 'react';
import Table from './components/table';
import dataset from './db/data';
import './App.css';

function App() {
  const [ data, setData ] = useState(dataset.map(elemId => ({id: elemId.id, data: elemId.mwt}) ));
  const [ elemId, setElemId ] = useState(0);
  
  const wrapFn = useCallback(val => {
    setElemId(val);
  }, [setElemId]);

  const selectData = (e) => {
    switch(e.target.value) {
      case 'bp': 
        setData(dataset.map(elemId => ({id: elemId.id, data: elemId.boilPt}) ));
        break;
      case 'mp':
        setData(dataset.map(elemId => ({id: elemId.id, data: elemId.meltPt}) ));
        break;
      case 'den':
        setData(dataset.map(elemId => ({id: elemId.id, data: elemId.density}) ));
        break;
      case 'en': 
        setData(dataset.map(elemId => ({id: elemId.id, data: elemId.electroneg}) ));
        break;
      case 'ear': 
        setData(dataset.map(elemId => ({id: elemId.id, data: elemId.empAtomRad}) ));
        break;
      case 'car': 
        setData(dataset.map(elemId => ({id: elemId.id, data: elemId.calcAtomRad}) ));
        break;
        default: setData(dataset.map(elemId => ({id: elemId.id, data: elemId.mwt}) ));
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <h2>Periodic Table</h2>
        <select onChange={selectData}>
          <option value="mwt" default>Molecular Weight</option>
          <option value="bp">Boiling Pt</option>
          <option value="mp">Melting Pt</option>
          <option value="den">Density</option>
          <option value="en">Electronegativity</option>
          <option value="ear">Emp Atomic Radii</option>
          <option value="car">Calc Atomic Radii</option>
        </select>
        
        <Table data={data} dataset={dataset} elemSetter={wrapFn} elemId={elemId} />
      </div>
    </div>
  );
};

export default App;
