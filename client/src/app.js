import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './home';

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

    </Routes>
  );
}

export default App;