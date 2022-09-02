import { useEffect } from "react";
import {useParams} from "react-router-dom";

const getMovie = async(id)=>{
    const json = await(await fetch(`https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`)).json();
    console.log(json.data.movie)
}


function Detail(){
    const {id} = useParams();
    useEffect(()=>{
        getMovie(id);
    })
    return(
        <h1>Detail</h1>
    )
}

export default Detail;