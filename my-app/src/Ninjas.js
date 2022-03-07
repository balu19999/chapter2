import React, {Component} from 'react';

const Ninjas=({ninjas,deleteNinja})=>{//this is an desturcturing props
   //  console.log(this.props);//to print in consol    //  const {ninjas}=props;//to pass the props value
    //    const ninjaslist=ninjas.map(ninja =>
    //     { 
    //         if(ninja.age>20)
    //         {
           
    //         return(
    //     <div className="ninja" key={ninja.id}>
    //         <div>Name:{ninja.name}</div>
    //         <div>age:{ninja.age}</div>
    //         <div>belt:{ninja.belt}</div>
    //      </div>)
    // }
    // else
    // {
    //     return null;
    // }
        //})
        
        return(
           <div className='ninjas-list'>
               {
                ninjas.map(ninja =>{
           // condition ? () :()//ternery 
           return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
                    <div>Name:{ninja.name}</div>
                    <div>age:{ninja.age}</div>
                    <div>belt:{ninja.belt}</div>
                    <button onClick={()=>{deleteNinja(ninja.id)}}>delete ninja</button>
                 </div>
           ) : null;

        })
               }
           </div>
        )
    
}
export default Ninjas;