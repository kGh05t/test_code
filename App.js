import logo from './logo.svg';
import './App.css';
import BasicTextFields from './components/field';
import {useState,useContext,createContext} from 'react';
import Output from './components/output';

export const myContext=createContext(null);
function App() {
  const [flag,setFlag]=useState(false);
 const [input,setInput]=useState("");


  return (
    <div className="App">
      <myContext.Provider value={{input,setInput,flag,setFlag}}>
    <BasicTextFields/>
      {flag?<Output/>:null}
      </myContext.Provider>
    </div>
  );
}

export default App;
