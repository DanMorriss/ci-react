import logo from './logo.svg';
import './App.css';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';

function App() {
  return (
    <div className="App">
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
