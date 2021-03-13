import './App.css';
import {Provider} from "react-redux"
import store from './store'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Landing from './Components/AppComponents/Landing'
import LoginForm from './Components/AppComponents/LoginForm';
import Home from './Components/AppComponents/Home';
import AddUser from './Components/AppComponents/AddUser'
import Details from './Components/AppComponents/Details'
import Edit from './Components/AppComponents/Edit'
function App() {
  return (
    <Provider  store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/home" component={Home}/>
          <Route path="/add-user" component={AddUser}/>
          <Route path="/details/:id" component={Details}/>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>
      </Router>
    </Provider>
    );
}

export default App;
