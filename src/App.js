import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Animations from './screens/Animations/Animations';
import ButtonWorkshop from './screens/ButtonWorkshop/ButtonWorkshop';
import ChartDisplayer from './screens/Charts/ChartDisplayer/ChartDisplayer';
import LandingPage from './screens/LandingPage/LandingPage';
import WorldMap from './screens/WorldMap/WorldMap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/chartDisplay" element={<ChartDisplayer />}/>
          <Route exact path="/buttonWorkshop" element={<ButtonWorkshop />}/>
          <Route exact path="/worldWeather" element={<WorldMap />}/>
          <Route exact path="/animations" element={<Animations />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
