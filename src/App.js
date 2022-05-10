import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import Header from './components/template/Header'
import Footer from './components/template/Footer'

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
