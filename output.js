import Box from '@mui/material/Box';
import {useContext} from 'react';
import { myContext } from '../App';
export default function Output() {

    const {flag,setFlag,input,setInput}=useContext(myContext);
    let out='odd'
    let col='red'
    if(input%2==0 && input!==0){
        out='Even'
        col='green'
    }
    
  return (<div>
    <Box
      component="form"
      sx={{color:col,
        width:300,backgroundColor:'black'
      }}
      noValidate
      autoComplete="off"
    >
    <h1>{input}</h1>
    <h2>{out}</h2>
     </Box>
    </div>
   

  )
}