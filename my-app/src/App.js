import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component 
{
  state = {  ninjas:[
      {name:'ajay',age:'30',belt:'blue',id:1},
      {name:'pruthvi',age:'27',belt:'black',id:2},
      {name:'balu',age:'20',belt:'green',id:3}

    ]

  }
  render(){
  return (
    <div className="App">
     <h1>my first react app</h1>
     <p>welcome</p>
     <Ninjas ninjas={this.state.ninjas}/>
     <AddNinja />
    </div>
  );
}
}

export default App;
