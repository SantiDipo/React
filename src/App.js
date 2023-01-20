import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Detail from './components/public/Detail';
import { Footer } from './components/public/Footer';
import Main from './components/public/Main';
import { Navbar } from './components/public/Navbar';
import UserForm from './components/public/UserForm';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<Main />} />
          <Route path={"/details/:id"} element={<Detail />} />
          <Route path={"/user-form"} element={<UserForm />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}
export default App;