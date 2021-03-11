import React from 'react';
import Mal from '../img/male.png';
import femal from "../img/female.png";

const ShowImg = (props) => {
 
    const pic = props.img;
    let Male;
    if (pic) {
        Male=<img src={Mal}></img>
         
    } else {
        
        Male= <img src={femal}></img>
    }

    return (
        <div>
           {Male}
        </div>
    );
};

export default ShowImg;