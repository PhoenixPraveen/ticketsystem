import './App.css';
import TicketList from './components/TicketList';
import { getTickets } from './services/Tickets';

function App() {

  return (
    <>
      <TicketList tickets={getTickets()}></TicketList>
    </>
  );
}

export default App;
