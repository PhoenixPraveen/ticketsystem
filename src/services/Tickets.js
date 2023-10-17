const tickets = [
    {
      ticketId: 1,
      subject: "Website Login Issue",
      description: "I am unable to log in to my account on the website.",
      contactEmail: "user1@example.com",
      status: "open",
      owner: "agent1@example.com",
    },
    {
      ticketId: 2,
      subject: "Product Inquiry",
      description: "I have a question about one of your products.",
      contactEmail: "user2@example.com",
      status: "closed",
      owner: "agent2@example.com",
    },
    {
      ticketId: 3,
      subject: "Billing Problem",
      description: "I have been charged incorrectly on my last invoice.",
      contactEmail: "user3@example.com",
      status: "onhold",
      owner: "agent3@example.com",
    },
    {
      ticketId: 4,
      subject: "Technical Support",
      description: "I need assistance with setting up my new device.",
      contactEmail: "user4@example.com",
      status: "escalated",
      owner: "agent4@example.com",
    },
    {
      ticketId: 5,
      subject: "Missing Order",
      description: "I ordered a product, but it hasn't arrived yet.",
      contactEmail: "user5@example.com",
      status: "open",
      owner: "agent5@example.com",
    },
    {
      ticketId: 6,
      subject: "Account Deactivation",
      description: "I want to deactivate my account permanently.",
      contactEmail: "user6@example.com",
      status: "closed",
      owner: "agent5@example.com",
    },
    {
      ticketId: 7,
      subject: "Refund Request",
      description: "I would like a refund for my recent purchase.",
      contactEmail: "user7@example.com",
      status: "open",
      owner: "agent3@example.com",
    },
    {
      ticketId: 8,
      subject: "Product Complaint",
      description: "I am dissatisfied with the quality of the product.",
      contactEmail: "user8@example.com",
      status: "open",
      owner: "agent1@example.com",
    },
    {
      ticketId: 9,
      subject: "Shipping Delay",
      description: "My order is delayed, and I need an update.",
      contactEmail: "user9@example.com",
      status: "onhold",
      owner: "agent4@example.com",
    },
    {
      ticketId: 10,
      subject: "Technical Issue",
      description: "The app is crashing on my phone. Help!",
      contactEmail: "user10@example.com",
      status: "escalated",
      owner: "agent1@example.com",
    },
    {
      ticketId: 11,
      subject: "Password Reset",
      description: "I forgot my password and need to reset it.",
      contactEmail: "user11@example.com",
      status: "open",
      owner: "agent3@example.com",
    },
    {
      ticketId: 12,
      subject: "Product Inquiry",
      description: "I want to know more about your new product.",
      contactEmail: "user12@example.com",
      status: "open",
      owner: "agent4@example.com",
    },
    {
      ticketId: 13,
      subject: "Billing Issue",
      description: "There is a discrepancy in my billing statement.",
      contactEmail: "user13@example.com",
      status: "closed",
      owner: "agent2@example.com",
    },
    {
      ticketId: 14,
      subject: "Technical Support",
      description: "I need help troubleshooting a software problem.",
      contactEmail: "user14@example.com",
      status: "onhold",
      owner: "agent4@example.com",
    },
    {
      ticketId: 15,
      subject: "Return Request",
      description: "I would like to return a product for a refund.",
      contactEmail: "user15@example.com",
      status: "open",
      owner: "agent1@example.com",
    },
    {
      ticketId: 16,
      subject: "Account Access",
      description: "I can't access my account. It's locked.",
      contactEmail: "user16@example.com",
      status: "open",
      owner: "agent3@example.com",
    },
    {
      ticketId: 17,
      subject: "Product Complaint",
      description: "The product I received is damaged.",
      contactEmail: "user17@example.com",
      status: "onhold",
      owner: "agent2@example.com",
    },
    {
      ticketId: 18,
      subject: "Shipping Update",
      description: "I want to know when my order will arrive.",
      contactEmail: "user18@example.com",
      status: "escalated",
      owner: "agent1@example.com",
    },
    {
      ticketId: 19,
      subject: "Technical Assistance",
      description: "I need assistance with a software installation.",
      contactEmail: "user19@example.com",
      status: "open",
      owner: "agent5@example.com",
    },
    {
      ticketId: 20,
      subject: "Product Availability",
      description: "Is the product back in stock yet?",
      contactEmail: "user20@example.com",
      status: "closed",
      owner: "agent4@example.com",
    },
];

function getTicket(ticketId){
    const ticket = tickets.find( ticket => ticket.ticketId === ticketId);
    return ticket ? ticket : null;
}

function getTicketIndex(ticketId){
    return tickets.findIndex( ticket => ticket.ticketId === ticketId);
}

function setTicket(ticket){
    let ticketIndex = getTicketIndex(ticket.ticketId);
    tickets[ticketIndex] = ticket;
}

function getTickets(){
    return tickets;
}

function upsertTicket(updateData){
  console.log(updateData);
    const existingTicket = getTicket(updateData.ticketId);
    if(existingTicket === undefined){
      updateData['ticketId'] = tickets[tickets.length-1].ticketId + 1
      addTicket(updateData);
      return 0;
    }
    const updatedTicket = {
        ...existingTicket,
        ...updateData
    };
    setTicket(updatedTicket);
}

function addTicket(ticket){
  tickets.push(ticket);
}

export{getTicket, getTickets, upsertTicket};