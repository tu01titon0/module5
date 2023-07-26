import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppContext from "./context/AppContext";
import AddTour from "./pages/add";
import EditTour from "./pages/edit";
import DetailProduct from "./pages/detail";
import HomePage from "./pages/list";

function App() {
  return (
    <AppContext.Provider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add" element={<AddTour />}></Route>
        <Route path="/tour/:id" element={<EditTour />}></Route>
        <Route path="/detail/:id" element={<DetailProduct />}></Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
