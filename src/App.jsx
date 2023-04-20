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
import Addmonument from './components/Addmonument/Addmonument';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
          <Route path="/addmonument" element={<Addmonument />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
