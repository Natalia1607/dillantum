import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import {
  MainContainer,
  RegisterContainer,
  SignInContainer,
  CreateContainer, 
  BuyPage, 
  RentPage, 
  UserPage,
  PropertyPage
} from "./containers";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/sign-in" element={<SignInContainer />} />
          <Route path="/rent" element={<RentPage />}>
            <Route path="/rent/rent-daily" element={<RentPage />} />
            <Route path="/rent/rent-monthly" element={<RentPage />} />
            <Route path="/rent/rent-yearly" element={<RentPage />} />
            <Route path="/rent/rent-commercial" element={<RentPage />} />
          </Route>
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/personal_account" element={<UserPage />}>
            <Route path="/personal_account/favorites" element={<UserPage />} />
            <Route path="/personal_account/searches" element={<UserPage />} />
            <Route path="/personal_account/ads" element={<UserPage />} />
          </Route>
          <Route path="/property/:propertyId" element={<PropertyPage />} />
          <Route path="/createItem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
