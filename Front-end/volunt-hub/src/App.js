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
import { RequiredAuth } from './Components/Page/RequiredAuth/RequiredAuth';
import { AdminRequiredAuth } from './Components/Page/RequiredAuth/AdminRequiredAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/addEvent"
          element={
            <AdminRequiredAuth>
              <AddEvent />
            </AdminRequiredAuth>
          }
        />
        <Route
          path="/list"
          element={
            <AdminRequiredAuth>
              <ParticipantList />
            </AdminRequiredAuth>
          }
        />
        <Route path="/events" element={<EventPage />} />
        <Route
          path="/eventList"
          element={
            <AdminRequiredAuth>
              <EventPageAdmin />
            </AdminRequiredAuth>
          }
        />
        <Route
          path="/events/:id"
          element={
            <RequiredAuth>
              <ParticipationBooking />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
