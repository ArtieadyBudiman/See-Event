import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DesignEvent from "./Components/DesignEvent";
import AttendEvent from "./Components/AttendEvent";
import EventCategory from "./Components/EventCategory";
import ErrorPage from "./Pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import EventDetail from "./Components/EventDetail";
import CreateEvent from "./Components/CreateEvent";

function App() {
  return (
    <div className="App">
      <CreateEvent />
      <DesignEvent />
      <EventCategory />
      <AttendEvent />
      <EventDetail />
      {/* <ErrorPage /> */}
      {/* <Search/> */}
      <Footer />
    </div>
  );
}
export default App;
