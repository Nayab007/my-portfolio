import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landingpage from './Landingpage';
import AboutMe from './aboutme';
import Contacts from './contacts';
import Resume from './resume';
import Projects from './projects';
// not importing component, beacuse its not going to be  class base component

const Main = () => (
    <Switch>
        <Route exact path="/" component= {Landingpage} />
        <Route  path="/aboutme" component= {AboutMe} />
        <Route  path="/contacts" component= {Contacts} />
        <Route  path="/resume" component= {Resume} />
        <Route  path="/projects" component= {Projects} />
    </Switch>
)

export default Main;