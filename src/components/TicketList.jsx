import React, { useEffect, useState } from 'react';
import TicketForm from './TicketForm';
import NavBar from './NavBar';
function TicketList(props) {
    const { tickets } = props
    const [isOpen, setIsOpen] = useState(false);
    const [ticketId, setTicketId] = useState(null);

    useEffect(()=>{
        !isOpen && setTicketId(null);
    }, [isOpen]);

    const handleBadgeClass = (status) => {
        let badgeClass = '';
        switch(status) {
            case 'open':
                badgeClass = 'badge-primary';
            break;
            case 'closed':
                badgeClass = 'badge-success';
            break;
            case 'onhold':
                badgeClass = 'badge-warning';
            break;
            case 'escalated':
                badgeClass = 'badge-danger';
            break;
            default:
                badgeClass = 'badge-primary';
        }
        return badgeClass;
    }

    const handleClick = (event, key)=>{
        setIsOpen(true);
        setTicketId(key);
    }

    const handleModalClose = () => setIsOpen(false);

    return ( 
        <>
            <NavBar setIsOpen={setIsOpen}></NavBar>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Ticket ID</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Status</th>
                        <th scope="col">Description</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Contact Email</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets && tickets.map( ticket => (
                        <tr key={ticket.ticketId} onClick={event => handleClick(event, ticket.ticketId)}>
                            <td>{ticket.ticketId}</td>
                            <td>{ticket.subject}</td>
                            <td><span className={`badge ${handleBadgeClass(ticket.status)}`}>{ticket.status}</span></td>
                            <td>{ticket.description}</td>
                            <td>{ticket.owner}</td>
                            <td>{ticket.contactEmail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TicketForm ticketId={ticketId} isOpen={isOpen} handleClose={handleModalClose}></TicketForm>
        </>
    );
}

export default TicketList;