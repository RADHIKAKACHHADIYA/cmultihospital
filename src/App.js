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
import { SnackbarProvider } from 'notistack';
// import PubliceRoute from '/'


import { Provider } from 'react-redux';
import ThemeContext, { ThemeProvider } from './context/ThemeContext';
import PublicRoute from './route/PublicRoute';
import PriveteRoute from './route/PriveteRoute';

function App() {

  let { store, persistor } = configareStore();
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store} >
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <Switch>
              <PublicRoute exact path='/' component={Home} />
              <PublicRoute path='/About' component={About} />
              <PublicRoute path='/listappointment' component={ListAppointment} />
              <PublicRoute path='/bookAppointment' component={BookAppointment} />
              <PublicRoute path='/Contact' component={Contact} />
              <PublicRoute path='/Departments' component={Departments} />
              <PublicRoute path='/Doctors' component={Doctors} />
              <PriveteRoute path='/medicine' component={Medicine} />
              <PublicRoute path='/login' component={Login} />
              <PublicRoute parth='/Count' component={Count} />
              <PublicRoute path='/themeContaxt' component={ThemeContext} />
            </Switch>
            <Footer />
          </PersistGate>
          </ThemeProvider>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
