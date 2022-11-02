import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Feed from "./pages/Feed";
import Form from "./components/Form";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/feeds" element={user ? <Feed /> : <Login/>} />
          <Route path="/post" element={user ? <Form /> : <Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/login" element={!user ? <Login /> : <Feed/>} />
          <Route path="/signup" element={!user ? <Signup /> : <Feed/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
