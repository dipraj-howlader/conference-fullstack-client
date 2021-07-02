import React from 'react';
import './Ticket.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grid-cont px-16 pb-16">
            {
            tikdetails.map(detail => (
                <div className="text-center tic-card-container">
                    <h1 className="font-medium text-xl">{detail.name}</h1>
                    <div className="flex text-center items-center justify-center">
                    <FontAwesomeIcon icon={faDollarSign} size="2x" color="black" />
                    <h5 className="text-5xl">{detail.price}</h5>
                    </div>
                    
                    <h3 className="font-medium">{detail.description}</h3>
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-400 hover:border-transparent rounded">
                    REGISTER 
                    </button>
                </div>
            ))

            }
            </div>
        </div>
    );
};

export default Ticket;