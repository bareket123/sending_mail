import './App.css';
import Home from "./Screens/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DaysMenu from "./Screens/DaysMenu";
import DropdownMenu from "./Screens/DropdownMenu";

function App() {
  return (
      <BrowserRouter basename={"sending_mail"}>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/DaysMenu" element={<DaysMenu/>} />
          <Route path="/DropdownMenu" element={<DropdownMenu/>} />
          <Route path="/DaysMenu" element={<DaysMenu/>} />
      </Routes>
</BrowserRouter>

  );
}

export default App;
