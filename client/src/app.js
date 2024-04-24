import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import Blog from './components/blog';
import Login from './components/login';
import Error from './components/error';
import Precos from './components/precos';
import Parceiro from "./components/parceiros";




function App() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => console.log(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/error' element={<Error />} />
      <Route path='/servicos' element={<Precos />} />
      <Route path='/parceiros' element={<Parceiro />} />




    </Routes>
  );
}

export default App;