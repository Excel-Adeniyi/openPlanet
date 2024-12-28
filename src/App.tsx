import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import { AboutPage, HomePage, ProjectPage } from './pages/ui';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<AboutPage/>} path='/about'/>
        <Route element={<ProjectPage/>} path='/projects'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
