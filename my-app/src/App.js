import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './Ninjas.css'

class App extends Component 
{
  state = {  ninjas:[
      {name:'ajay',age:'30',belt:'blue',id:1},
      {name:'pruthvi',age:'27',belt:'black',id:2},
      {name:'balu',age:'20',belt:'green',id:3}
     ]
    }
  addNinja=(ninja)=>
  {
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas, ninja]
    this.setState(
      {
        ninjas:ninjas
      }
    )
  }
  deleteNinja=(id)=>{
    let ninjas=this.state.ninjas.filter(ninja=>
      {
        return ninja.id !==id
      })
      this.setState(
        {
          ninjas:ninjas
        }
      )

  }
  componentDidMount()
  {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps,prevState)
  {
    console.log('component updated');
    console.log('component updated');    console.log('component updated');

    

    console.log(prevProps,prevState);
  }
  render(){
  return (
    <div className="App">
     <h1>my first react app</h1>
     <p>welcome</p>
     <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
     <AddNinja addNinja={this.addNinja}/>
    </div>
  );
}
}

export default App;
