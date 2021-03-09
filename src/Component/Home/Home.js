import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import ShowClub from '../ShowClub/ShowClub';

const Home = () => {
   
    const [club, setClub] = useState([]);
    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
            .then(res => res.json())
            .then(data => setClub(data.leagues))
    }, [])
 ;
    return (
        <Container>
            <Card>

                <Card.Body>This is some text within a card body.{club.length}
                    {
                        club.map(club=><ShowClub club={club}></ShowClub>)
                    }
                </Card.Body>
            </Card>
        </Container>


    );
};

export default Home;