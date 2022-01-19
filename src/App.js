import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DesignEvent from './Components/DesignEvent';
import ErrorPage from './Pages/Error';

function App() {
  return (
    <div className="App">
      <DesignEvent/>
      {/* <ErrorPage/> */}
    </div>
  );
}

export default App;
