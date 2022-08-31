import { PropTypes } from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";


function Movie({id,coverImg,title,summary,genres}){
    return (
        <div className="wrap">   
            <div className="topWrap">
                <div className="imgWrap">
                <img src={coverImg} alt={title} className="imgStyle"/>
                </div>   
                <h3 className="title"><Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>{title}</Link></h3>
            </div>
                      
            <div className="description">                
                <p>{summary.length >235? `${summary.slice(0,235)}...`: summary}</p>
                <ul>
                    {genres.map(g=>(<li key={g}>{g}</li>))}
                </ul>
            </div>         
          </div>
    )
}

Movie.protoType ={
    id:PropTypes.number.isRequired,
    key:PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;