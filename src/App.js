import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routers/Home';
import Game from './routers/Game';
import Result1 from './routers/Result/Result1';
import Result2 from './routers/Result/Result2';
import Result3 from './routers/Result/Result3';
import Result4 from './routers/Result/Result4';
import Users from './components/Users';

const App = () => {
  return (
    <Users>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/result1" component={Result1} />
        <Route path="/result2" component={Result2} />
        <Route path="/result3" component={Result3} />
        <Route path="/result4" component={Result4} />
      </HashRouter>
    </Users>
  );
};

export default App;
