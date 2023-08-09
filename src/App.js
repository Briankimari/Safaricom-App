import { BrowserRouter , Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Main from "./pages/main/Main";
import Profile from "./components/profile/Profile";
import Deposit from "./components/deposit/deposits";
import Withdraw from "./components/withdraw/Withdraw";


function App() {
 
  return (
    <BrowserRouter>
   
            <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
      <Route path="/safaricom" element={<Main/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/deposit" element={<Deposit/>} />
      <Route path="/transact" element={<Withdraw/>} />
       
            </Routes>
    </BrowserRouter>
  );
}

export default App;
