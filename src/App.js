import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Header from './components/header/header.components';
import HomePageContainer from './pages/homepage/homepage.container';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
      </Switch>

    </div>
  );
}

export default App;
