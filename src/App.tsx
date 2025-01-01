import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import { AboutPage, Contact, HomePage, ProjectPage, Team } from './pages/ui';
import 'aos/dist/aos.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<AboutPage/>} path='/about'/>
        <Route element={<ProjectPage/>} path='/projects'/>
        <Route element={<Contact/>} path='/contact'/>
        <Route element={<Team />} path='/team' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
