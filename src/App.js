import React from "react";
import axios from "axios";
import Movie from "./Movie";

//밑에 컴포넌트는 함수가 아니기대문에 return이 없어서 render를 사용해줘야함
class App extends React.Component{ //리엑트 컴포넌트는 render()메서드를 가지고 있음 extands로 상속 받아왔기때문에  이제 App컴포넌트에서도 redner를 사용가능함
  state = {
    isLoading: true,
    movies: [],
  };

  //https://yts-proxy.now.sh/list_movies.json
  getMovies = async () => {
    const { 
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loding...": movies.map(movies => ( 
        <Movie 
          key={movies.id}
          id={movies.id} 
          year={movies.year} 
          title={movies.title} 
          summary={movies.summary} 
          poster={movies.medium_cover_image} 
        />
      )
    )}</div>;
  }

}

export default App;
