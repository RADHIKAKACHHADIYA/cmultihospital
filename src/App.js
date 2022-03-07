import './App.css';
import Header from './Componets/Header';
import Home from './Container/Home';
import About from './Container/About';
import ListAppointment from './Container/Appointment/ListAppointment';
import BookAppointment from './Container/Appointment/BookAppointment'
import Contact from './Container/Contact'
import Departments from './Container/Departments'
import Doctors from './Container/Doctors'
import Login from './Container/Login'
import Medicine from './Container/Medicine';
import Footer from './Componets/Footer';
import Count from './Container/Count';
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Switch } from 'react-router-dom';
import configareStore from './redux/store';

import { Provider } from 'react-redux';
import ThemeContext, { ThemeProvider } from './context/ThemeContext';

function App() {

  let { store, persistor } = configareStore();
  return (
    <>
      
        <Provider store={store} >
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/listappointment' component={ListAppointment} />
              <Route path='/bookAppointment' component={BookAppointment} />
              <Route path='/Contact' component={Contact} />
              <Route path='/Departments' component={Departments} />
              <Route path='/Doctors' component={Doctors} />
              <Route path='/medicine' component={Medicine} />
              <Route path='/login' component={Login} />
              <Route parth='/Count' component={Count} />
              <Route path='/themeContaxt' component={ThemeContext} />
            </Switch>
            <Footer />
          </PersistGate>
          </ThemeProvider>
        </Provider>
      
    </>
  );
}

export default App;
