import { lazy, Suspense, useState } from 'react';
import './index.css';
import CustomBtn from './components/button/CustomBtn';
import CustomInput from './components/forms/CustomInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Container from './components/Container';
import AppHeader from './components/AppHeader';
import AppGallery from './views/pages/gallery/AppGallery';
import { Loader1 } from './components/loader/Loaders';
const Dashboard = lazy(() => import('./views/pages/Dashboard'));
const SideNav = lazy(() => import('./components/SideNav'));
const Login = lazy(() => import('./views/auth/Login'));
const Signup = lazy(() => import('./views/auth/Signup'));
const Gallery = lazy(() => import('./views/pages/gallery/Gallery'));
const Potfolio = lazy(() => import('./views/pages/Potfolio'));
const Cal = lazy(() => import('./views/pages/Cal'));
const AppGame = lazy(() => import('./views/pages/tic_tac/AppGame'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader1/>}>
        <ThemeProvider>
          <Container>
            <Router>
              <SideNav />
              <AppHeader/>
              <Routes>
                <Route path='/gallery' element={<AppGallery />} /> 
                <Route path='/tic-tac' element={<AppGame />} />
                <Route path='/cal' element={<Cal />}/>
                <Route path='/' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/potfolio' element={<Potfolio/>}/>
              </Routes>
            </Router>
          </Container>
        </ThemeProvider>
      </Suspense>
    </>
  )
}

export default App
