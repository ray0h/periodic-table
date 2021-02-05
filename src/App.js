import React, { useState, useCallback, useEffect } from 'react';
import Table from './components/table';
import elements from './db/elements';
import mwt from './db/mwt';
import electroneg from './db/electroneg';
import boilPt from './db/boilPt';
import meltPt from './db/meltPt';
import density from './db/density';
import calcAtomRad from './db/calcAtomRad';
import empAtomRad from './db/empAtomRad';
import './App.css';

function App() {
  const [ data, setData ] = useState(mwt);
  const [ elem, setElem ] = useState(0);
  const [ elemData, setElemData ] = useState([]);

  useEffect(() => {
    if (elem !== 0) {
      let name = elements.filter(el => el.id === Number(elem) )[0].name;
      let mw = mwt.filter(el => el.id === Number(elem) )[0].data;
      let en = electroneg.filter(el => el.id === Number(elem) )[0].data;
      let bp = boilPt.filter(el => el.id === Number(elem) )[0].data;
      let mp = meltPt.filter(el => el.id === Number(elem) )[0].data;
      let dn = density.filter(el => el.id === Number(elem) )[0].data;
      let car = calcAtomRad.filter(el => el.id === Number(elem) )[0].data;
      let ear = empAtomRad.filter(el => el.id === Number(elem) )[0].data;
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
        console.log('switched')
        setData(boilPt);
        break;
      case 'mp':
        setData(meltPt);
        break;
      case 'den':
        setData(density);
        break;
      case 'en': 
        setData(electroneg);
        break;
      case 'ear': 
        setData(empAtomRad);
        break;
      case 'car': 
        setData(calcAtomRad);
        break;
        default: setData(mwt);
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
