import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Flight from "./containers/Flight";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StaffComponent from "./containers/StaffComponent";
import Header from "./containers/Header";
import FlightList from "./containers/FlightList";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/flights" component={FlightList} />
          <Route path="/flights/:flightId" component={Flight}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
