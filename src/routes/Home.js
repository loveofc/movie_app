import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import "./Home.css";
import axios from"axios"


export default function Home(){
    const [values,setValues] = useState({str:"best", year1:"2010", year2:"2022",showBlock:20, nGenre:0});
    const [loading, setLoading] = useState(true);
    const [movies, setMovies]=useState([]);
    const onKeyUp  =(e)=>{     
      const {name, value} = e.target;
      setValues({...values, [name]:value})
    
    }
    const onClick=(e)=>{
      const {name, value} = e.target;
      setValues({...values, [name]:value})
    }
     const getMovies= async (str,year1,year2,showBlock,nGenre)=>{
    //https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
    //https://yts-proxy.now.sh/list_movies.json?minimum_rating=9&sort_by=year
    let strQuery = str
    let startYear =year1
    let endYear =year2
    let showB = showBlock

    const response = await axios.get("/v1/search/movie.json",{
      method: 'GET', // *GET, POST, PUT, DELETE 등
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      params : {
        query : strQuery,
        display : Number(showB),
        genre :  nGenre,
        yearfrom: Number(startYear.slice(0,4)),
        yearto: Number(endYear.slice(0,4)),
      
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        "X-Naver-Client-Id": "dImdFIHBYrOEuOCea4gF",
        "X-Naver-Client-Secret" : "gcbkrS5BSg"
      }
    });
    const json = await response.data
    setMovies(json.items)
    setLoading(false);
  }
  useEffect(()=>{
    console.log(values.str,values.year1,values.year2,values.showBlock,values.nGenre)
    getMovies(values.str,values.year1,values.year2,values.showBlock,values.nGenre);
  },[values.str,values.year1,values.year2,values.showBlock,values.nGenre])
  return (
    <div>
     {loading ? <Loading/>: 
      <div className="container">      
        <div className="inputText">  
          <h1>네이버 영화 API 검색 미니프로젝트</h1>
          <form name="frm" onKeyUp ={onKeyUp}>
            키워드 : <input  name="str" type="text" defaultValue={values.str}></input><br/>
            시작 연도 : <input name="year1" type="text" defaultValue={values.year1}></input><br/>
            끝 연도 : <input name="year2" type="text" defaultValue={values.year2}></input><br/>
            검색 수 : <select name="showBlock" id="nGenre" onClick={onClick}>
              <option value="20">--선택해주세요-- </option>
              <option value="10">10개 </option>
              <option value="30">30개</option>
              <option value="50">50개 </option>
              <option value="100">100개</option>
              <option value="500">500개 </option>
              <option value="1000">1000개</option>            
            </select><br/>
            장르 : <select name="nGenre" id="nGenre" onClick={onClick}>
              <option value="-">--선택해주세요-- </option>
              <option value="1">드라마 </option>
              <option value="2">판타지</option>
              <option value="3">서부 </option>
              <option value="4">공포</option>
              <option value="5">로맨스 </option>
              <option value="6">모험</option>
              <option value="7">스릴러 </option>
              <option value="8">느와르</option>
              <option value="9">컬트 </option>
              <option value="10">다큐멘터리</option>
              <option value="11">코미디 </option>
              <option value="12">가족</option>
              <option value="13">미스터리 </option>
              <option value="14">전쟁</option>
              <option value="15">애니메이션 </option>
              <option value="16">범죄</option>
              <option value="17">뮤지컬 </option>
              <option value="18">SF</option>
              <option value="19">액션</option>
              <option value="20">무협</option>
              <option value="21">에로 </option>
              <option value="22">Saab</option>
              <option value="23">에로</option>
              <option value="24">블랙코미디</option>
              <option value="25">실험 </option>
              <option value="26">영화카툰</option>
              <option value="27">영화음악 </option>
              <option value="28">영화패러디포스터</option>              
            </select>
          </form>
        </div>
        {movies.map((movie,index) => {
          return ( 
              <Movie key={index} id={movie.link} coverImg={movie.image} title={movie.title} summary={movie.actor} genres={movie.userRating}></Movie>
            )
        })}
     </div>}
    </div>
   
  );
}