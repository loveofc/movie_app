import { PropTypes } from "prop-types";
//import {Link} from "react-router-dom";
import "./Movie.css";



function Movie({id,coverImg,title,summary,genres}){
    return (
            
            <div className="wrap">   
            
            <div className="topWrap">
                <div className="imgWrap">
                <img src={coverImg} alt={title.replace("<b>","").replace("</b>","").replace("<b>","").replace("</b>","")} className="imgStyle"/>
                </div>   
                <h3><a href={id} target="_blank" rel="noreferrer" className="title">{title.replace("<b>","").replace("</b>","").replace("<b>","").replace("</b>","")}</a></h3>
            </div>
                      
            <div className="description">
             {summary!=="" && <p>제작 및 출연진 : <br/><strong>{summary.length >235? `${summary.slice(0,235)}...`: summary}</strong></p> }               
             {summary==="" && <p>There is Noting to write....</p>} 
            
                   <p>평점 : {genres}</p>
                
            </div>      
              
          </div>
         
        
    )
}

Movie.protoType ={
    id:PropTypes.string.isRequired,
    key:PropTypes.string.isRequired,
    coverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
}
export default Movie;