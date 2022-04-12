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
// import Register from './components/signUpIn/Register';

function App() {
  return (
    // <div className="App">
    //   <p> Hello bitches </p>
    // </div>

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/UserSignUp" element={<UserSignUp />} />
        <Route path="/MemberSignUp" element={<MemberSignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Chat" element={<Chat />} />
        {/* <Route path="/Register" element={<Register />} /> */}
        {/* <Route path="/api" element={<Api />} /> */}
        {/* <Route path="/src/components/contents/1anxiety.tsx" element={<Anxiety />} /> */}
        {/* <Route path="/userSignUpIn" element={<UserSignUp />} /> */}
        {/* <Route path="/memberSignUpIn" element={<MemberSignUp />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
