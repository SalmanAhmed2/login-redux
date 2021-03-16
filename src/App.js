import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./Components/AppComponents/LoginForm";
import Home from "./Components/AppComponents/Home";
import AddUser from "./Components/AppComponents/AddUser";
import Details from "./Components/AppComponents/Details";
import Edit from "./Components/AppComponents/Edit";
import Register from "./Components/AppComponents/Register";
import ProtectedRoute from "./Components/AppComponents/ProtectedRoute";
import ProtectedForm from "./Components/AppComponents/ProtectedForm";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <ProtectedForm path="/login" component={LoginForm} />
          <ProtectedForm path="/register" component={Register} />
          <Route path="/add-user" component={AddUser} />
          <ProtectedRoute path="/details/:id" exact component={Details} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
