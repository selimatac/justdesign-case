import Header from './components/header';
import Home from './components/home';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/home';
import JobsPage from './pages/jobs';
import ServicesPage from './pages/services';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Home>
        <Switch>
          <Route path="/why" exact component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/" component={JobsPage} />
          <Redirect to="/"/>
        </Switch>
      </Home>
    </BrowserRouter>
  );
}

export default App;
