import Seat from './Seat';
import Facility from './Facility';
import Exit from './Exit';
import Wing from './Wing';

const displaySeats = (seatList) => {
  return <div>{seatList.map((seat) => 
  <Seat number={seat.number} x={seat.coordinates.x} y={seat.coordinates.y} availability={seat.travelerPricing[0].seatAvailabilityStatus}/>
  )}</div>
}

const displayFacilities = (facilityList) => {
return <div id="facilities">{facilityList.map((facility) => 
<Facility code={facility.code} x={facility.coordinates.x} y={facility.coordinates.y} />
)}</div>
}

const displayExits = (exitRows) => {
  return <div>{exitRows.map((row) => <Exit row={row} />)}</div>
}

const displayWings = (start, end) => {
  return <><Wing orientation="left" start={start} end={end} />
  <Wing orientation="right" start={start} end={end} />
  </>
}

const Deck = (props) => {
  const width = props.deck.deckConfiguration.width;
  const length = props.deck.deckConfiguration.length;
  const seatList = props.deck.seats;
  const facilities = props.deck.facilities;
  const wingStart = props.deck.deckConfiguration.startWingsX;
  const wingEnd = props.deck.deckConfiguration.endWingsX;
  const exitRows = props.deck.deckConfiguration.exitRowsX;
  
  return (
    <div id="deck" style={{width:`${width*2.2}em`, height:`${length*2.1}em`}}>
      {displayWings(wingStart, wingEnd)}
      {displaySeats(seatList)}
      {displayFacilities(facilities)}
      {displayExits(exitRows)}
    </div>
  )
}

export default Deck;