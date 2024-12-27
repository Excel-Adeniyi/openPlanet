import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router';
import HomePAge from './pages/ui/home/home_page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePAge/>} path='/'/>
        <Route element={<HomePAge/>} path='/home'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
