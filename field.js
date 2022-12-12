import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import {useContext} from 'react';
import { myContext } from '../App';

export default function BasicTextFields() {

    const {input,setInput,flag,setFlag}=useContext(myContext);


  return (
    <div>
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" 
      onChange={(event)=>{setInput(event.target.value)}}/>

        <Button variant="contained"  onClick={()=>{
            setFlag(true);
        }}>submit        </Button>
      
      
    </Box>
    </div>
  );
}