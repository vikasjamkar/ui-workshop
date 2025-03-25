import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import StudentForm from './component/StudentForm';
import Home from "./component/Home";
import Navigation from "./component/Navigation";

function App() {
  return (
    <Router>
      {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<StudentForm />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
