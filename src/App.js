import React from "react";

//밑에 컴포넌트는 함수가 아니기대문에 return이 없어서 render를 사용해줘야함
class App extends React.Component{ //리엑트 컴포넌트는 render()메서드를 가지고 있음 extands로 상속 받아왔기때문에  이제 App컴포넌트에서도 redner를 사용가능함
  constructor(props) {
    super(props);
    console.log("hellow");
  }
  state = {
    count: 0,
  }
  add = () => {
    this.setState(current => ({ count: current.count +1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
  };
/* 
  이부분에도 state를 불러 사용할수 있지만 작동하지않는다 그래서 새스테이츠를 만들어줘야함
  setState를 호출하게 되면(setState를 호출할때 마다) react는 밑에 state를 refresh(새로고침)하고 render함수를 호출해줄것임
*/
  componentDidMount() {
    console.log("component")
  }
  componentDidUpdate() {
    console.log("I just Update")
  }
  render(){
    console.log("I am rendering");
    return (
      <div>
        <h1> number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;
