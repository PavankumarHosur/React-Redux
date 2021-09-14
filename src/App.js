import logo from "./logo.svg";
import "./CSS/Style.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Flight from "./containers/Flight";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StaffComponent from "./containers/StaffComponent";
import Header from "./containers/Header";
import FlightList from "./containers/FlightList";
import { PersistGate } from "redux-persist/integration/react";
import Demo from "./containers/Demo";
import Passengers from "./containers/Passengers";
import FlightSeats from "./containers/FlightSeats";
import Dummy from "./containers/Dummy";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/flights" component={FlightList} />
              <Route exact path="/passengers" component={Passengers} />
              <Route path="/flights/:flightId" component={Flight}></Route>
              <Route path="/dummy" component={Dummy}></Route>
              <Redirect to="/"></Redirect>
              {/* redirect to "/" */}
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
