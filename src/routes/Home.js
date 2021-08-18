import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./home.css";

//밑에 컴포넌트는 함수가 아니기대문에 return이 없어서 render를 사용해줘야함
class Home extends React.Component{ //리엑트 컴포넌트는 render()메서드를 가지고 있음 extands로 상속 받아왔기때문에  이제 App컴포넌트에서도 redner를 사용가능함
  state = {
    isLoading: true,
    movies: [],
  };

  //https://yts-proxy.now.sh/list_movies.json 바뀌는 yts주소를 링크해줌
  getMovies = async () => {
    const { 
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() { //최초 렌딩시점
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return( 
      <section className="container">
        {isLoading ? (
          <div className="loder">
            <span className="loader_text">Loading...</span>
          </div>
          ) : ( 
            <div className="movies">
              {movies.map(movies => ( 
                <Movie 
                  key={movies.id}
                  id={movies.id} 
                  year={movies.year} 
                  title={movies.title} 
                  summary={movies.summary} 
                  poster={movies.medium_cover_image} 
                  genres={movies.genres}
                />
              ))}
            </div>
          )
        }
      </section>
    )
  }
    
}

export default Home;
