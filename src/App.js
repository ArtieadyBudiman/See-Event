import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DesignEvent from './Components/DesignEvent';
import ErrorPage from './Pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <DesignEvent/>
      {/* <ErrorPage/> */}
      <Search/>
      <Footer/>
    </div>
  );
}
export default App;