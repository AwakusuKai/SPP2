import axios from 'axios'
import {API_URL} from "../config";

export const add = async (event, name, genre, developer, description, gameHours) => {
    event.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('genre', genre);
    data.append('developer', developer);
    data.append('description', description);
    data.append('gameHours', gameHours);
    await axios.post(`${API_URL}api/add`, data, {});
}

export const view = async () => {
    
    return (await axios.get(`${API_URL}api/view`, {})).data.games;
}

export const info = async (id) => {
    
    return (await axios.get(`${API_URL}api/info`,
        {headers:{gameId: id}}
        )).data.game;
}

export const editPost = async (event, gameId, name, genre, developer, description, gameHours) => {
    event.preventDefault();
    const data = new FormData();
    data.append('gameId', gameId);
    data.append('name', name);
    data.append('genre', genre);
    data.append('developer', developer);
    data.append('description', description);
    data.append('gameHours', gameHours);
    await axios.post(`${API_URL}api/edit`, data, {});
}

export const deletePost = async (event, gameId) => {
    const data = new FormData();
    data.append('gameId', gameId);
    await axios.post(`${API_URL}api/delete`, data, {}
    );

}