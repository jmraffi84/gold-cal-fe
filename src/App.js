import { Routes, Route } from 'react-router-dom';
import './App.css';
import GoldRateCalculator from './Components/GoldRateCalculator';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DataTable from './Components/DataTable';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GoldRateCalculator />} />
        <Route path="/data" element={<DataTable />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
