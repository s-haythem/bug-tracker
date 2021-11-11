
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/views/dashboard'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './redux/action/auth-action';
import PrivateRoute from './components/routes/privateRoute';
import Login from './components/views/login';
import Register from './components/views/register';
import {getAllBugsHandler} from './redux/action/bug_actions'
function App() {
 
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(getAuthUser())
 dispatch(getAllBugsHandler())
  })


  return (
    <div className="App">
  <Router>
    <Switch>
    
    <PrivateRoute exact path='/' component={PrivateRoute} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/dashboard" component={Dashboard} />
    
    </Switch>
     
     </Router>
    </div>
  );
}

export default App;
