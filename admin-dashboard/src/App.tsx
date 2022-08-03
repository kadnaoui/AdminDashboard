import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './Pages/Login';
import Routess from './routes';
import { userState } from "./redux/userRedux";
import {useSelector} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = (): JSX.Element => {
  const {user} = useSelector((state:any) => state.user);
  

console.log(user);


  return (
    
      <BrowserRouter>

        <Routes>
          <Route path='*' element={user?.isAdmin?<Routess />:<Navigate to='/login'/>} />
          <Route path='/login' element={user?.isAdmin?<Navigate to='/'/>:<Login/>} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
