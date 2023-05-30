import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  MainContainer,
  RegisterContainer,
  SignInContainer,
  CreateContainer,
  PropertiesPage,
  PropertyCardPage,
  UserPage,
} from "./containers";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/sign-in" element={<SignInContainer />} />
          <Route path="/:purpose/property" element={<PropertiesPage />}>
            {/* <Route path="/for-rent/rent-daily" element={<RentPage />} />
            <Route path="/for-rent/rent-monthly" element={<RentPage />} />
            <Route path="/for-rent/rent-yearly" element={<RentPage />} />
            <Route path="/for-rent/rent-commercial" element={<RentPage />} /> */}
          </Route>
          <Route
            path="/:purpose/property/:propertyId"
            element={<PropertyCardPage />}
          />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/personal_account" element={<UserPage />}>
            <Route path="/personal_account/favorites" element={<UserPage />} />
            <Route path="/personal_account/searches" element={<UserPage />} />
            <Route path="/personal_account/ads" element={<UserPage />} />
          </Route>
        </Routes>
      </main>
      {location.pathname != "/" &&
        location.pathname != "/personal_account" &&
        location.pathname != "/register" &&
        location.pathname != "/sign-in" && <Footer />}
    </div>
  );
};

export default App;
