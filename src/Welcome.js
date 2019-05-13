import React from 'react'
import Eat from './Eat'

class Welcome extends React.Component {


    loopThroughThings = () => {
        console.log('inside loop',this)

        let copyOfThings = this.props.things.map((eachThing,i)=>{
            return ( 
                <li key={i}> 
                    <Eat thing={eachThing}/> 
                </li>
            )
        })
        return copyOfThings;
    }


    render(){

        let user = this.props.user.toUpperCase();

        
        return (

            <div>
                
                
                {user} says welcome guys to {this.props.library.split('').join('_')}
                <br></br>

                {this.loopThroughThings()}


            </div>
        )
    }
}


export default Welcome