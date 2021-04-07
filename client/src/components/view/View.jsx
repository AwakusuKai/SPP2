import React, {useState} from 'react';
import {view} from "../../actions/user";
import "./view.css"
import {NavLink} from "react-router-dom";

const View = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    const [games, setGames] = useState([]);
    let index = 0;

    if (!contentLoaded) {
        setContentLoaded(true);
        view().then(games => {
            console.log(games)
            setGames(games);
        })
    }

    const IncreaseIndex = () => index++;
    

    return (
        <div>

        <header>
            <div className="header_title">
                <NavLink to="/view"><h1 class = "headerName">My Games List</h1></NavLink>
            </div> 
            <div class = "headerButtonsList">
                <NavLink to="/add"><button type="button">Добавить</button></NavLink>
                <NavLink to="/view"><button type="button">Просмотр</button></NavLink>
            </div>
        </header>
        <body>
            <ol class ="gamesList">
            <h1>Список игр</h1>
            {games.map((game) => (

                <div class = "game" key={index}> 

                            <NavLink to={`/info?id=${index}`} style={{ textDecoration: 'none'  }} class = "link">
                                <li name={IncreaseIndex()}  > {game.name}  </li>    
                            </NavLink>
                                            
                </div>       
            )
            )}
            </ol>
        </body>
    </div>

    );
};

export default View;
