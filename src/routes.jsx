import { Login } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import NavHeader from './components/Header';
import Home from './pages/Home';

export default function MainRoutes() {
  return (
    // <Routes>
    <Route path='/' element={<Home />} />

    // {/* </Routes> */}
  );
}

{/* <Route element={<NavHeader />} >
  <Route path='/login' element={<Login />} />
</Route> */}