import {useState, useEffect} from "react";

export function Post(props) {
    return (
        <p class="post">
            Post description: 
            <br></br>
            {props.post}
        </p>
    );
}

// Comment
export function Comment(props) {
    //set name to pokemon
    const [pokemon, setPokemon] = useState();

    const handleFetch = (response) => {
        console.log(response.status);
        return response.json();
    }

    const handleResponse = (response) => {
        const respPoke = response.results.map((item) => {return item.name});
        setPokemon(respPoke);
    }

    const handleError = (error) => {
        console.log(error);
        setPokemon(<li>Network Error!</li>)
    }

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=1&offset=0";
        fetch(url)
        .then(handleFetch)
        .then(handleResponse)
        .catch(handleError)
    }, []);

    return (
        <p class="post">
            Comment by {pokemon}:
            <br></br>
            {props.comment}
        </p>
    );
}

// Avatar
export function Avatar(props) {
    return (
        <img src={props.image} alt="Avatar"></img>
    );
}