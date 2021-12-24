import './App.css';
import Header from './Componets/Header';
import Home from './Container/Home';
import About from './Container/About';
import Appointment from './Container/Appointment'
import Contact from './Container/Contact'
import Departments from './Container/Departments'
import Doctors from './Container/Doctors'
import Login from './Container/Login'
import Footer from './Componets/Footer';


import { Route , Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Appointment' component={Appointment}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/Departments' component={Departments}/>
          <Route path='/Doctors' component={Doctors}/>
          <Route path='/login' component={Login} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
