import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUP';
import Header from '../components/Header';

function RoutesProtection({ redirectTo }) {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}
export default function MainRoutes() {

  return (
    <div className="container_home">
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
        {/* </Route> */}
        {/* <Route path='/signIn' element={<Header />}> */}
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />

        <Route element={<RoutesProtection redirectTo={'/'} />}>
          <Route path='/dashboard' element={<Dashboard />} />

        </Route>

      </Routes>
    </div>
  )
}