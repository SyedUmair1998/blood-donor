
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar  from './Navbar';
import { FindDonor } from './FindDonor';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path = "/finddonor" component ={FindDonor} />
    </Switch>

    </BrowserRouter>

  );
}

export default App;
