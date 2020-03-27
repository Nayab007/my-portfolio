import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                    <img 
                    src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png"
                    alt="avatar"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                    <h1>Frontend Web Developer</h1>
                
                    <hr/>
                    <p>HTML/CSS | JavaScript | React | Github | Figma </p>
                    
                    <div className="social-links">
                    
                    {/* linkedin */}
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin-square" aria-hidden='true'/>
                    </a>
                    {/* Github */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github" aria-hidden='true'/>
                    </a>
                         {/* Freecodecamp */}
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-free-code-camp"/>

                    </a>
                    </div>
                        </div>
                </Cell>
            </Grid>
            </div>
        )
        
    }
}
export default Landing;