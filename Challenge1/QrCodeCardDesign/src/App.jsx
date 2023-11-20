import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import './style/index.scss';
import QRCard from './components/QRCard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<QRCard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
