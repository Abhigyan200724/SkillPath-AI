import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';

function App() {
 


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
