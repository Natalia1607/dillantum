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
  AgenciesPage,
  NotFoundPage,
  AgenciesPropertyPage,
  ResetPasswordContainer,
} from "./containers";
import { useLocation } from "react-router-dom";
import { FloatButton } from 'antd';
import { BiArrowToTop } from "react-icons/bi";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <FloatButton.Group
        shape="circle"
        style={{
          right: 25,
        }}
      >

        <FloatButton.BackTop icon={<BiArrowToTop className="icon" />} visibilityHeight={0} />
      </FloatButton.Group>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/sign-in" element={<SignInContainer />} />
          <Route path="/reset" element={<ResetPasswordContainer />} />
          <Route path="/:purpose/property" element={<PropertiesPage />} />
          <Route path="/for-rent/property:rentType" element={<PropertiesPage />} />
          <Route path="/:purpose/property/:id" element={<PropertyCardPage />} />
          <Route path="/createItem" element={<CreateContainer />} />
          <Route path="/agencies" element={<AgenciesPage />} />
          <Route path="/agencies/:agencySlug" element={<AgenciesPropertyPage />} />
          <Route path="/personal_account" element={<UserPage />}>
            <Route path="/personal_account/favorites" element={<UserPage />} />
            <Route path="/personal_account/searches" element={<UserPage />} />
            <Route path="/personal_account/ads" element={<UserPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
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
