import React from 'react';
import Card from './Card';

		const Cardlist=({robots})=>{
           // if(true){
          	// throw new Error(" Nooooo! There is an Error");
           // }
		 return (
		 	<div>
		 	    {
			          robots.map((user,i)=>{
			   	       return(
			   	       	  <Card
			   	            key ={robots[i].id} 
			   	            id={robots[i].id} 
			      	        name={robots[i].name}
			   	            email={robots[i].email}
			   	           />
			   	       );
		             })
		        }
		   </div>
		);
	}

export default Cardlist;