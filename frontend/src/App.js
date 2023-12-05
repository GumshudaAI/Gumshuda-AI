import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Police from "./pages/police-section/police";
import Login from './pages/User/Login'
import Register from './pages/User/Register'
import Law from "./pages/Laws/Law";
import Parents from "./pages/Parents/Parent";

export default function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/police" element={<Police/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/laws" element={<Law/>} />
          <Route exact path="/parent" element={<Parents/>} />
        </Routes>
      </div>
  );
}
