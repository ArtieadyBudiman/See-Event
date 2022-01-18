import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Search from './Components/Search';
import Footer from './Components/Footer';
import Profile from './Components/Profile'

function App() {
   return (
      <div className="App">
         <Search/>
         <Profile/>
         <Footer/>
      </div>
   );
}

export default App;
