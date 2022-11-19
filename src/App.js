import './App.css';
import React , {useState} from 'react';
import Display from "./components/Display"
import Form from "./components/Form"
import Ninja from "./components/Ninja"
import FormNinja from "./components/FormNinja" 


function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);
  const [ ninjaBoxArray, setNinjaBoxArray ] = useState([])
  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
      <FormNinja ninjaBoxArray={ ninjaBoxArray } setNinjaBoxArray={ setNinjaBoxArray } />
      <Ninja ninjaBoxArray={ ninjaBoxArray } />
    </div>
  );
}

export default App;
