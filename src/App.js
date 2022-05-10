import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import Footer from './components/template/Footer'

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
