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
          <Route path="/:purpose/property" element={<RentPage />}>
            {/* <Route path="/for-rent/rent-daily" element={<RentPage />} />
            <Route path="/for-rent/rent-monthly" element={<RentPage />} />
            <Route path="/for-rent/rent-yearly" element={<RentPage />} />
            <Route path="/for-rent/rent-commercial" element={<RentPage />} /> */}
          </Route>
          <Route path="/:purpose/property" element={<BuyPage />} />
          <Route path="/:purpose/property/:propertyId" element={<PropertyPage />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/personal_account" element={<UserPage />}>
            <Route path="/personal_account/favorites" element={<UserPage />} />
            <Route path="/personal_account/searches" element={<UserPage />} />
            <Route path="/personal_account/ads" element={<UserPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  ); 
};

export default App;
