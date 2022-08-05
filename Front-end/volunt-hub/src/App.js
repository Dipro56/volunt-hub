import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './Components/Page/LoginPage/LoginPage';
import { RegisterPage } from './Components/Page/RegisterPage/RegisterPage';
import { HomePage } from './Components/Page/HomePage/HomePage';
import { AdminPage } from './Components/Page/AdminPage/AdminPage';
import { AddEvent } from './Components/Page/AddEvent/AddEvent';
import { EventPage } from './Components/Page/EventPage/EventPage';
import { EventPageAdmin } from './Components/Page/EventPageAdmin/EventPageAdmin';
import { ParticipationBooking } from './Components/Page/ParticipationBooking/ParticipationBooking';
import { ParticipantList } from './Components/Page/ParticipantList/ParticipantList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/list" element={<ParticipantList />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/eventList" element={<EventPageAdmin />} />
        <Route path="/events/:id" element={<ParticipationBooking />} />
      </Routes>
    </div>
  );
}

export default App;
