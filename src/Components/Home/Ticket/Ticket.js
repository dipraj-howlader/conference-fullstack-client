import React from 'react';
import './Ticket.css';

const tikdetails = [{
    name:'Early Bird',
    price:'39',
    description:'1 Conference Day, 1 Workshop Day, Regular Seat, Free Coffee/Lunch, One Certificate',

},{
    name:'Regular',
    price:'99',
    description:'2 Conference Day, 2 Workshop Day,Regular Seat,Free Coffee/Lunch, Two Certificate',

},
{
    name:'Exclusive',
    price:'199',
    description:'Full Conference Day, Full Workshop Day, VIP Seat, Free Coffee/Lunch, Three Certificate',

}
]

const Ticket = () => {
    return (
        <div className="ticket-container">
             <h1 class="text-gray-700 text-2xl font-serif font-bold md:font-black">Tickets</h1>
            <p className="font-semibold text-gray-800">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, ut, eos dolorem maiores nisi sapiente non, vitae vel tenetur optio..</p>
        </div>
    );
};

export default Ticket;