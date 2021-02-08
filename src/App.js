import React, { useState, useCallback, useEffect } from 'react';
import Table from './components/table';
import elements from './db/elements';
import dataset from './db/data';

import './App.css';

function App() {
  const [ data, setData ] = useState(dataset.map(elem => ({id: elem.id, data: elem.mwt}) ));
  const [ elem, setElem ] = useState(0);
  const [ elemData, setElemData ] = useState([]);

  useEffect(() => {
    if (elem !== 0) {
      let name = elements.filter(el => el.id === Number(elem) )[0].name;
      let mw = dataset.filter(el => el.id === Number(elem) )[0].mwt;
      let en = dataset.filter(el => el.id === Number(elem) )[0].electroneg;
      let bp = dataset.filter(el => el.id === Number(elem) )[0].boilPt;
      let mp = dataset.filter(el => el.id === Number(elem) )[0].meltPt;
      let dn = dataset.filter(el => el.id === Number(elem) )[0].density;
      let car = dataset.filter(el => el.id === Number(elem) )[0].calcAtomRad;
      let ear = dataset.filter(el => el.id === Number(elem) )[0].empAtomRad;
      console.log(elem, mw)
      setElemData([{
        name,
        mwt: mw, 
        electroneg: en, 
        boilPt: bp, 
        meltPt: mp, 
        density: dn, 
        calcAtomRad: car, 
        empAtomRad: ear 
      }]);
    }
  }, [elem] ); 

  const wrapFn = useCallback(val => {
    setElem(val);
  }, [setElem]);

  const selectData = (e) => {
    switch(e.target.value) {
      case 'bp': 
        setData(dataset.map(elem => ({id: elem.id, data: elem.boilPt}) ));
        break;
      case 'mp':
        setData(dataset.map(elem => ({id: elem.id, data: elem.meltPt}) ));
        break;
      case 'den':
        setData(dataset.map(elem => ({id: elem.id, data: elem.density}) ));
        break;
      case 'en': 
        setData(dataset.map(elem => ({id: elem.id, data: elem.electroneg}) ));
        break;
      case 'ear': 
        setData(dataset.map(elem => ({id: elem.id, data: elem.empAtomRad}) ));
        break;
      case 'car': 
        setData(dataset.map(elem => ({id: elem.id, data: elem.calcAtomRad}) ));
        break;
        default: setData(dataset.map(elem => ({id: elem.id, data: elem.mwt}) ));
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
        {(elemData.length === 0)
          ? <div></div> 
          : <div className="info" style={{fontSize:11, backgroundColor:'gray'}}>
              <div>
                <span>Name: {elemData[0].name}</span><br/>
                <span>MW: {elemData[0].mwt}</span><br/>
                <span>Boiling Pt (&#8451;): {elemData[0].boilPt}</span><br/>
                <span>Melting Pt (&#8451;): {elemData[0].meltPt}</span><br/>
              </div>
              <div>
                <span>Density (g/cm<sup>3</sup>): {elemData[0].density}</span><br/>
                <span>Electronegativity: {elemData[0].electroneg}</span><br/>
                <span>Atomic Radius, calc (pm): {elemData[0].calcAtomRad}</span><br/>
                <span>Atomic Radius, emp (pm): {elemData[0].empAtomRad}</span><br/>
              </div>
            </div> }
        <Table dataset={data} elemSetter={wrapFn} />
      </div>
    </div>
  );
};

export default App;
