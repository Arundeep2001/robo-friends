import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox.js';
//import {robots} from './Robots.js';
import './Roboapp.css';
import Scroll from '../components/Scroll.js'

class Roboapp extends React.Component{
	constructor(){
		super();
		this.state={
	    robots:[],
	    searchfield:''
        }
	}

componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(users => this.setState({robots:users}))
}

onSearchChange=(event)=>{
   this.setState({searchfield:event.target.value})
}
 render(){
   const {robots,searchfield}=this.state;
 	const filteredRobots=robots.filter(robot=>{
  	return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })
 
 if(robots.length===0){
 	return <h1>LOADING</h1>
 }else{
 	return (
           <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
           <Searchbox searchChange={this.onSearchChange} />
           <Scroll>
           <Cardlist robots={filteredRobots}/>
           </Scroll>
		   </div>
		);
   }

 	
  }
	
}

export default Roboapp;