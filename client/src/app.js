import React, { useEffect } from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './home';
import Blog from './components/blog';
import Login from './components/login';
import Precos from './components/precos';
import Parceiro from "./components/parceiros";
import Register from "./components/registro";
import Password from "./components/password";
import ResetPassword from "./components/resetpassword";
import Error from "./components/error";
import Dashboard from "./components/dashboard";
import DashboardProfile from "./components/dashboardprofile";
import DashboardPromotion from "./components/dashboardpromotion";
import DashboardAiService from "./components/dashboardaiservices";
import DashboardImageAi from "./components/dashboardimageai";
import TermsAndConditions from "./components/termosecondicoes";







function App() {
  

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/error' element={<Error />} />
      <Route path='/servicos' element={<Precos />} />
      <Route path='/parceiros' element={<Parceiro />} />
      <Route path='/termoscondicoes' element={<TermsAndConditions />} />
      <Route path='/registro' element={<Register />} />
      <Route path='/password' element={<Password />} />
      <Route path='/error' element={<Error />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="/reset-password/:token" element={<ResetPassword/>} />
      <Route path="/dashboard/perfil" element={<DashboardProfile />} />
     <Route path="/dashboard/servicosai" element={<DashboardAiService />} />
     <Route path="/dashboard/promocoes" element={<DashboardPromotion />} />
     <Route path="/dashboard/imageai" element={<DashboardImageAi />} />




       
    </Routes>





  );
}

export default App;