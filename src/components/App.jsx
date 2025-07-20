import Header from './Header/Header';
import Home from './Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
