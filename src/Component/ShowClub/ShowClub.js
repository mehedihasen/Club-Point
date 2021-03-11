

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import "./showclub.css";

const ShowClub = (props) => {


  const {strLeague, idLeague }=props.league
  const hestory = useHistory();
 const handel=(id)=>{
      hestory.push(`/Datile/${idLeague}`)
  }
  
    return (
        <div className="card-desing">
            
            <h3>{strLeague}</h3>
           
        <Button onClick={()=>handel(idLeague)}>explopr</Button>
        
   
        </div>
    );
};

export default ShowClub;