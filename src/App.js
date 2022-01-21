import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components";
import Navbar from "./Components/Navbar";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
// import Search from './Components/Search';
// import ButtonSearch from './Components/ButtonSearch';
import Comment from './Components/Comment';
import Footer from "./Components/Footer";
import SearchPage from "./Components/SearchPage";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
   return (
      <div>
         
         <BrowserRouter>
         {/* <Navbar /> */}
         {/* <SearchBar/> */}
         <SearchPage/>
         {/* <Routes>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/" element={<Home />} />
         </Routes> */}
         {/* <Comment/> */}

         {/* <Footer /> */}
         </BrowserRouter>
      </div>
   );
}
export default App;
