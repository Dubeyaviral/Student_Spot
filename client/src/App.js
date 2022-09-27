import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Property from './component/Property';
import PropertyUpload from './component/PropertyUpload';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/property" element={<Property/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/uploadProperty" element={<PropertyUpload/>} />
      </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
