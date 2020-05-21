import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './styles/App.sass';

import Sidebar from './components/Sidebar/Sidebar';
import Home from './containers/Home/Home';
import Users from './containers/Users';
import Sessions from './containers/Sessions';
import Analytics from './containers/Analytics';
import Messages from './containers/Messages';
import Chats from './containers/Chats';
import HelpCenter from './containers/HelpCenter';
import Settings from './containers/Settings';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar/>
      <Switch>
        <Route path="/home" component={Home} exact/>
        <Route path="/users" component={Users}/>
        <Route path="/sessions" component={Sessions}/>
        <Route path="/analytics" component={Analytics}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/chats" component={Chats}/>
        <Route path="/help" component={HelpCenter}/>
        <Route path="/settings" component={Settings}/>
      </Switch>
    </div>
  );
}

export default App;
