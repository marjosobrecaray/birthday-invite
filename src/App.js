import cursor from './cursor.png';
import clock from './clock.png';
import cake from './cake.png';
import flame from './flame.png';
import boy from './boy.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="body">
        <p>YOU ARE INVITED!</p>
        <div className="name">DAN EMMANUEL</div>
        <div className="title">is turning 5</div>




        <div className="bday-boy">
          <img src={boy} alt="birthday boy"/>
        </div>
        <div className="details">
          <div className="block">
            <img src={cursor} alt="cursor" className="icon"/>
            <a href="https://maps.app.goo.gl/1SkykTmkD2mmwQ7J8" target='_blank' className="location">
              <div className="location">Villa Crisel, Mandaue <span>(click me)</span></div>
            </a>
          </div>

          <div className="block">
            <img src={clock} alt="clock" className="icon"/>
            <div className="location">@1pm Febuary 8, Sunday</div>
          </div>
        </div>

        <div className="block note">
          <p>Note: Bring swimming clothes and floaties, kids!</p>
        </div>

        <div className="cake-container">
          <img src={flame} className="flame"/>
          <img src={cake} className="cake"/>
        </div>

      </div>
    </div>
  );
}

export default App;
