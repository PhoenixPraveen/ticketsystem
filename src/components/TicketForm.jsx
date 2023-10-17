import React, { useState, useEffect } from 'react';
import { getStatus } from '../services/Status';
import { getAgents } from '../services/Agents'; 
import  ReactDOM  from 'react-dom';
import { getTicket, upsertTicket } from '../services/Tickets';

function TicketForm(props) {
    const {isOpen, ticketId, handleClose} = props;

    const statusList = getStatus();
    const ownersList = getAgents();
    const [value, setValue] = useState({status : 'open', agent : ownersList[0]});

    useEffect(() => {
        if(ticketId !== undefined && ticketId !== null){
            setValue(getTicket(ticketId));
            console.log("Hello Im in UE", value);
        }
    }, [isOpen, ticketId, value]);

    if(!isOpen) {
        return null;
    }


    const handleChange = (event)=> {
        const changeObject = {...value};
        changeObject[event.target.id] = event.target.value; 
        console.log("Hello Im in HC", changeObject);
        setValue(changeObject);
    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log('Res ->',value);
        upsertTicket(value);
    }


    return ReactDOM.createPortal(
        <div className='d-flex fixed-top justify-content-center overlay'>
            <form className='p-3' style={{width : '50%', 'marginTop' : '8%', height : 'fit-content', 'background' : '#fff', 'borderRadius' : '10px'}}> 
                <h1 className="display-5" style={{textAlign: 'center'}}>{`Ticket  ${ticketId ? 'update' : 'create'}`}</h1>
                { ticketId && <h4>{`#TicketId-${ticketId}`}</h4>}
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" className="form-control" id="subject" onChange={handleChange} placeholder="Enter subject" value={ value ? value.subject : ''}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" id="description" rows="3" onChange={handleChange} value={value ? value.description : ''}></textarea>
                </div>
                <div className="form-group">
                    <label>Contact Email</label>
                    <input type="email" className="form-control" required id="contactEmail" onChange={handleChange} placeholder="Enter Contact email" value={value ? value.contactEmail : ''}/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" value={value ? value.status : 'open' } onChange={handleChange} id="status">
                    {
                        statusList.map( status => <option key={status}>{status}</option>)
                    }
                    </select>
                </div>
                <div className="form-group">
                    <label>Owner</label>
                    <select className="form-control" value={value ? value.owner : ownersList[0]} onChange={handleChange} id="owner">
                    {
                        ownersList.map( owner => <option key={owner}>{owner}</option>)
                    }
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mr-2">{ticketId ? 'update' : 'create'}</button>
                <button type="button" className="btn btn-danger ml-2" onClick={handleClose}>close</button>
            </form>   
        </div>
    , document.getElementById('ticket-view'));
}

export default TicketForm;