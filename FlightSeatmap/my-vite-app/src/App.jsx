import { seatMap } from './data/seatmap';
import './App.css'
import Deck from './components/Deck';

function App() {

  return (
    <>
      <div className="App">
        {seatMap.data[0].decks.map((deck, i) => (
          <Deck deck={deck} key={i} />
        ))}
      </div>
    </>
  )
}

export default App
