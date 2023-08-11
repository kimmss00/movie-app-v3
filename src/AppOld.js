import React from "react";

class AppOld extends React.Component{

  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count : 0
  };

  add = () =>{
    console.log("add");
    this.setState(current => ({
      count: current.count +1
    }));
  };

  minus = () =>{
    console.log("minus");
    this.setState({
      count: this.state.count -1
    })
  } 

  //render 끝나고 동작함
  componentDidMount(){
    console.log('alter component rendered');
  }

  
  componentDidUpdate(){
    console.log("alter component update");
  }
  componentWillUnmount(){
    console.log("good bye~~");
  }
  render(){
    console.log('render');
    return (
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
