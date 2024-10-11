import React from 'react';
import Details from "./details"
import Appfech from "./apifetching"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Appfech/>}></Route>
        <Route path="/menu" element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
