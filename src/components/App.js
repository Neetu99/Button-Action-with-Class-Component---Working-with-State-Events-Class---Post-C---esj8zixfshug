import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showPara: false
    };
	    
//  we are binding here "this" keyword to the onclick handlerClick function. Why we are binding ,, becoz if we do not bind "this " keyword to HandleClick function 
//  when we run and click on button after clicking that will show us to "This" keyword is undifind inSide ===> this.setState({}).. whe need to bind HandleClick with  
//   the Obj of ==>"this".
    this.handleClick = this.handleClick.bind(this);
	};
 handleClick() {
    this.setState({
      showPara: true
    });
  }
    render() {
    	return(
    		<div id="main">
			 <button id="click" onClick={this.handleClick}>Click Me!</button>
        {this.state.showPara && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      
    		</div>
    	);
    }
}


export default App;
