import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FavouriteContainer, Header, Footer } from './components';
import { MainContainer, RegisterContainer, SignInContainer } from './containers'
import { BuyPage, RentPage, UserPage } from './pages';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<MainContainer />}/>
          <Route path='/register' element={<RegisterContainer />}/>
          <Route path='/sign-in' element={<SignInContainer />}/>
          <Route path='/rent' element={<RentPage />}>
            <Route path='/rent/rent-daily' element={<RentPage />}/>
            <Route path='/rent/rent-monthly' element={<RentPage />}/>
            <Route path='/rent/rent-yearly' element={<RentPage />}/>
            <Route path='/rent/rent-commercial' element={<RentPage />}/>
          </Route>
          <Route path='/buy' element={<BuyPage />}/>
          <Route path='/personal_account' element={<UserPage />}> 
            <Route path='/personal_account/searches' element={<UserPage />}/>
            <Route path='/personal_account/favorites' element={<FavouriteContainer />}/>
            <Route path='/personal_account/ads' element={<UserPage />}/>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
