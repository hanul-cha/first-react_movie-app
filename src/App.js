import React from "react";
import axios from "axios";

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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  }
  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loding...": "We are ready"}</div>;
  }

}

export default App;
