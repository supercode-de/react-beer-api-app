import { Switch, Route, useLocation } from 'react-router-dom';
import Detail from './components/Detail';
import All from './components/All';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
 
  const location = useLocation();

  return ( 
    <div className="app">
      <main>
        <Switch>
          <Route path="/beer/random"><Detail /></Route>
          <Route path="/beer/:id"><Detail /></Route>
          <Route path="/beer/"><All /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </main>
      { location.pathname !== '/' && <Nav /> }
    </div>
   );
}

export default App;