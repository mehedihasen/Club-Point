
import { Button } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import "./showclub.css";

const ShowClub = (props) => {


  const {strLeague, idLeague }=props.league
  const hestory = useHistory();
 const handel=()=>{
      hestory.push(`/Detail/${idLeague}`)
  }
  
    return (
        <div className="card-desing ">
            <div className="col-md-6 col-sm-4">
            <h3>{strLeague}</h3> 
            <Button onClick={()=>handel(idLeague)}>explopr</Button>
            </div>
        </div>
    );
};

export default ShowClub;