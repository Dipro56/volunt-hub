import './App.css';
import { Header } from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/Page/LoginPage/LoginPage';
import { RegisterPage } from './Components/Page/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
