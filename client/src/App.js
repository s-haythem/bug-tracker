
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './components/views/dashboard'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthAllUser, getAuthUser } from './redux/action/auth-action';
import PrivateRoute from './components/routes/privateRoute';
import Login from './components/views/login';
import BugPage from './components/Pages/BugPage';
import ProjectPage from './components/Pages/ProjectPage';
import ProfilePage from './components/Pages/ProfilePage';
import Register from './components/views/register';
import {getAllBugsHandler} from './redux/action/bug_actions'
import { getAllProjectHandler } from './redux/action/project-action';
function App() {
 
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(getAuthUser())
 dispatch(getAllBugsHandler())
 dispatch(getAllProjectHandler())
 dispatch(getAuthAllUser())
  },[])


  return (
    <div className="App">
  <Router>
    <Switch>
    
    <PrivateRoute exact path='/' component={PrivateRoute} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/dashboard/bugs" component={BugPage} />
    <Route exact path="/dashboard/projects" component={ProjectPage} />
    <Route exact path="/dashboard/profile" component={ProfilePage} />
    
    </Switch>
     
     </Router>
    </div>
  );
}

export default App;
