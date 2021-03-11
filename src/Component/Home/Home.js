import React, { useEffect, useState } from 'react';
import './home.css'
import { Container, Row } from 'react-bootstrap';
import ShowClub from '../ShowClub/ShowClub';


const Home = () => {
    const [club, setClub] = useState([]);
    const league = club.slice(0, 10);
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then(res => res.json())
            .then(data => setClub(data.leagues))
    }, []);
    console.log(club);
        
    return (
        <Container >
            <Container >
            <div className="card">{
                    league.map(club => <ShowClub league={club} ></ShowClub>)
                }</div>
            </Container>

          
        </Container>


    );
};

export default Home;