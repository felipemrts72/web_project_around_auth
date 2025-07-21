import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
