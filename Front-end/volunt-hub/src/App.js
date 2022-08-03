import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/Page/LoginPage/LoginPage';
import { RegisterPage } from './Components/Page/RegisterPage/RegisterPage';
import { HomePage } from './Components/Page/HomePage/HomePage';
import { AdminPage } from './Components/Page/AdminPage/AdminPage';
import { DashboardPage } from './Components/Page/DashboardPage/DashboardPage';
import { AddEvent } from './Components/Page/AddEvent/AddEvent';
import { VolunteerList } from './Components/Page/VolunteerList/VolunteerList';
import { EventPage } from './Components/Page/EventPage/EventPage';
import { EventPageAdmin } from './Components/Page/EventPageAdmin/EventPageAdmin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/list" element={<VolunteerList />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/eventList" element={<EventPageAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
