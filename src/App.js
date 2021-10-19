import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import About from './Components/About/About';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/register">
            <Register></Register>
          </Route>

          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>

          <PrivateRoute path="/details/:servicesId">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      <Footer></Footer>  
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
