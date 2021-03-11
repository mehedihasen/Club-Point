import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const Detail = () => {
    const { id } = useParams();
    const [info, setInfo]= useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res=>res.json())
        .then(data=>setInfo(data.leagues[0]))
    },[])
    console.log(info);

    const {strLeague, strBadge }=info


    return (
       
        <div>
            
            <img src={strBadge}></img>

            <h1>{strLeague}</h1>
            

        </div>
         
    );
};

export default Detail;