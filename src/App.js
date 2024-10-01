import { useState,useEffect } from 'react';
import './App.css';
import Idcard from "../src/PdfRenderer/Idcard"
import Imagg from "../src/PdfRenderer/Image"
import PdfDownload from "../src/PdfRenderer/PdfDownload"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./UserData.json"

function App() {
  console.log(Data,"value");
  return (
    <div className="App">  
     <Router>
        <Routes>
        <Route exact={true} path=":id" element={<Idcard />} />
        <Route exact={true} path="/image" element={<Imagg />} />
        <Route exact={true} path="/user/:num" element={<PdfDownload />} />
        </Routes>
</Router>
     
    </div>
  );
}

export default App;
