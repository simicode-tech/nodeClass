// import logo from './logo.svg';
import "./App.css";
import AddMovie from "./component/AddMovie";
// import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
// import Modal from "./component/Modal";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Table from "./Pages/Admin/MovieList";
import EditMovie from "./Pages/Admin/EditMovie";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Resgister2 from "./Pages/Resgister2";
// import Admin from "./Pages/Admin/Admin";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/addmovie/" element={<AddMovie />} />
        <Route path="/admin/list/" element={<Table />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Resgister2 />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* <Modal /> */}
    </div>
  );
}

export default App;
