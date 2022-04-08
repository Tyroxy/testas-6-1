import {useEffect, useState} from 'react';
import axios from 'axios';


function Jokes() {

    const [jokes, setJokes] = useState([]);

    useEffect(() => {

        axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,e')
        .then(res => {
            console.log(res.data);
            setJokes(respond.data.jokes)
            
        })

    }, []);

    return (
        <ul>
            {
                jokes.map(m, i) =>
            }
        </ul>
    )
}

export default Jokes;