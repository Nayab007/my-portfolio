import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contacts extends Component {
    render(){
        return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Nayab Lone</h2>
                    <img
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>My contact information. You can reach me by phone, Email, FaceBook & Instagram.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
    <div className='contact-List'>
        <List>
        <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        (0738236700)</ListItemContent>
        </ListItem>

        <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
        <i className="fa fa-envelope" aria-hidden="true"/>
     Nayab.Lone@hyperisland.se</ListItemContent>
        </ListItem>

        <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
        <i className="fa fa-facebook-square" aria-hidden="true"/>
        ryangiggs</ListItemContent>
        </ListItem>

        <ListItem>
    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
        <i className="fa fa-instagram" aria-hidden="true"/>
        ryangiggs</ListItemContent>
        </ListItem>
      
        </List>
    </div>
        
  
                </Cell>
            </Grid>
        </div>
        )
        
    }
}
export default Contacts;

