
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar  from './Navbar';
import { FindDonor } from './FindDonor';
import { Home } from './Home';
import  Footer  from './Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path = "/" component ={Home} />
      <Route exact path = "/finddonor" component ={FindDonor} />
    </Switch>
    <Footer />  

    </BrowserRouter>

  );
}

export default App;
