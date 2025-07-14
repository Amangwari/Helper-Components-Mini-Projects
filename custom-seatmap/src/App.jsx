import React from 'react';
import seatResponse from '../seatData.json';
import SeatMap from './components/seatmap';

const App = () => {
   const allServices = seatResponse.Service;
  const onlySeats = allServices.filter(service => service?.Type === 'SEAT');
  console.log(onlySeats, "only")

  const handleBooking = (seat) => {
    alert(`You selected seat ${seat.Code} with price $${seat.PricingInfo?.TotalGrossPrice}`);
    // You can send seat data to backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Flight Seat Map</h1>
       <SeatMap seats={onlySeats} onBook={handleBooking} />
    </div>
  );
};

export default App;
