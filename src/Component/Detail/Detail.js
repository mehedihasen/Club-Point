import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ShowImg from '../ShowImg/ShowImg';
import './detail.css';


export const Send = createContext();

const Detail = () => {
    const { id } = useParams();
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
            .then(res => res.json())
            .then(data => setInfo(data.leagues[0]))
    }, [])

    console.log(info);

    const { strTwitter, strYoutube, strFacebook, strDescriptionFR, strDescriptionEN, strFanart1, strSport, strGender, strCountry, dateFirstEvent, strLeague } = info


    return (
        <>
            <div>
               <img src={strFanart1} className=" col-md-12 col-sm-4" alt=""/>
            </div>
            <div className="main " >
                <div className="ex row ">
                    <div className="col-md-6 col-sm-6">
                        <h2>Name :{strLeague}</h2>
                        <h4>Found:{dateFirstEvent}</h4>
                        <h4>Country:{strCountry}</h4>
                        <h4>Gender: {strGender}</h4>
                        <h4>Plytype:{strSport}</h4>

                    </div>
                    <div className="">

                        <ShowImg img={strGender} >

                        </ShowImg>

                    </div>
                </div>
                <div>
                    <div>
                        <h5>{strDescriptionEN}</h5>
                        <h5>{strDescriptionFR}</h5>
                    </div>
                    <div >
                        <a href={strFacebook}><span className="icon"><FontAwesomeIcon icon={faFacebook} /></span> </a>
                        <a href={strTwitter}><span className="icon"><FontAwesomeIcon icon={faTwitter} /></span></a>
                        <a href={strYoutube}><span className="icon"><FontAwesomeIcon icon={faYoutube} /></span></a>
                    </div>
                </div>

            </div>
    </>

    );
};

export default Detail;