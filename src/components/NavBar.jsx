import React from 'react';

function NavBar(props) {
    const {setIsOpen} =props;

    const handleClick = ()=>{
        setIsOpen(true);
    }
    return ( 
        <nav className="navbar navbar-light bg-light justify-content-between">
            <span className="navbar-brand">Phoenix Desk</span>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick}>Create Ticket</button>
        </nav>
    );
}

export default NavBar;