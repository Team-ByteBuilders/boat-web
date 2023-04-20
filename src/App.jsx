import './App.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Navigate,
} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Addmonument from './components/Addmonument/Addmonument';
import Bigcard from './components/bigcard/bigcard';
import Adduserimage from './components/Adduserimage/Adduserimage';


function App() {

  const token=localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={token?<Navigate to="/home"/>:<Navigate to="/login"/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addmonument" element={<Addmonument />} />
          <Route path="/bigcard/:id" element={<Bigcard />} />
          <Route path="/adduserimage" element={<Adduserimage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
