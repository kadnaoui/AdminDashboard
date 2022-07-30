import { FC } from 'react';
import { TopBar } from './components/topbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeWrapper } from './assets/wrappers/HomeWrapper';
import { SideBar } from './components/sideBar'
import { Main } from './Pages/Main';
import { Users } from './Pages/Users';
import { EditUser } from './Pages/EditUser';
import { Createuser } from './Pages/CreateUser';
import { Products } from './Pages/Products';
import { Product } from './Pages/Product';
import { CreateProduct } from './Pages/CreateProduct';
const App: FC = (): JSX.Element => {

  return (
    
      <BrowserRouter>
        <TopBar />
        <HomeWrapper>
        <SideBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/users' element={<Users />} />
          <Route path='/create-user' element={<Createuser />} />
          <Route path='/users/:id' element={<EditUser />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/create-product' element={<CreateProduct />} />
        </Routes>
        
    </HomeWrapper>
      </BrowserRouter>
  );
}

export default App;
