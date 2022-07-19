import './App.css';
import { Header } from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/Page/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
