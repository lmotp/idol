import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routers/Home';
import Game from './routers/Game';
import Result from './routers/Result';

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/result" component={Result} />
    </HashRouter>
  );
};

export default App;
