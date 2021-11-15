import './App.css';
import Home from './Pages/Home/Home/Home';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import Showroom from './Pages/Showroom/Showroom';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/home">
              <Home></Home>
            </Route>
            <Route path = "/cars">
              <Showroom></Showroom>
            </Route>
            <PrivateRoute path="/purchase/:offerId">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path = "/login">
              <LogIn></LogIn>
            </Route>
            <Route path = "/registration">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path = "*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
