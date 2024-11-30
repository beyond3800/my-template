import { lazy, Suspense, useState } from 'react';
import './index.css';
import CustomBtn from './components/button/CustomBtn';
import CustomInput from './components/forms/CustomInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Container from './components/Container';
import AppHeader from './components/AppHeader';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Table from './components/Table';
const Dashboard = lazy(() => import('./views/pages/Dashboard'));
const SideNav = lazy(() => import('./components/SideNav'))

function App() {
  return (
    <>
      <Suspense>
        <ThemeProvider>
          <Container>
            <Router>
              <SideNav />
              <AppHeader/>
              <Routes>
                <Route path='/' element={<Dashboard />} exact />
                <Route path='/login' element={<Login />} exact />
                <Route path='/signup' element={<Signup />} exact />
              </Routes>
            </Router>
          </Container>
          </ThemeProvider>
        </Suspense>
    </>
  )
}

export default App
