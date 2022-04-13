import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

//-----------pages
import AboutUs from "./components/AboutUs/AbountUs";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import UserSignUp from "./components/signUpIn/UserSignUp";
import MemberSignUp from './components/signUpIn/MemberSignUp';
import SignIn from './components/signUpIn/SignIn';
import Chat from './components/Chat/Chat';
import Recommendations from './components/Recommendations/Recommendations';
import Statistics from './components/Statistics/Statistics';

function App() {  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/UserSignUp" element={<UserSignUp />} />
        <Route path="/MemberSignUp" element={<MemberSignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Recommendations" element={<Recommendations />} />
        <Route path="/Statistics" element={<Statistics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
