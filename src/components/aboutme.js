import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';

class Aboutme extends Component {
    render(){
        return(
            <Grid className="aboutme-grid">
            <Cell col={11}>
        <p>
            <h3>I'm Studying Frontend Development program at Hyper Island. I have been living in Sweden for almost 5 years now. 
            Before that, I was living in Canada , the U.S and South Africa, and some other countries. 
            <hr/>
            <strong>Interests</strong><br/>
             I like to travel. I like to work out. I like to play paintball. I like to hang out with my friends.I like to try new things such as sky diving, base jumping. I like to try different food.
        </h3>
        
        </p>
        </Cell>
        </Grid>
        )
        
    }
}
export default Aboutme;
