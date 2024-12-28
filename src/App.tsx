import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import { AboutPage, HomePage } from './pages/ui';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<AboutPage/>} path='/about'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
