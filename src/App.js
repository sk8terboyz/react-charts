import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ChartDisplayer from './screens/Charts/ChartDisplayer/ChartDisplayer';
import LandingPage from './screens/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route exact path="/chartDisplay" element={<ChartDisplayer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
