import React, { useEffect, useState } from 'react';
import './home.css'
import ShowClub from '../ShowClub/ShowClub';
import Top from '../Top/Top';



const Home = () => {
    const [club, setClub] = useState([]);
    const league = club.slice(0, 12);
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then(res => res.json())
            .then(data => setClub(data.leagues))
    }, []);

        
    return (
     <div>
            <Top></Top>
          
            <div className="card">{
                    league.map(club => <ShowClub league={club} ></ShowClub>)
                }</div>
            
     
     </div>

    );
};

export default Home;