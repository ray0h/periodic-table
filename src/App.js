import React, { useState } from 'react';
import Table from './components/table';
import mwt from './db/mwt';
import electroneg from './db/electroneg';
import boilPt from './db/boilPt';
import './App.css';

function App() {
  const [ data, setData ] = useState(mwt)
  const mwData = () => { setData(mwt) };
  const bpData = () => { setData(boilPt) };
  const enData = () => { setData(electroneg) };
  console.log(boilPt[0])
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="App">
        <h2>Periodic Table</h2>
        <button onClick={mwData}>MW</button>
        <button onClick={bpData}>B.Pt</button>
        <button onClick={enData}>Electronegativity</button>
        <Table dataset={data}/>
      </div>
    </div>
  );
}

export default App;
