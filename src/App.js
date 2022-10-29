
import './App.css';
import Header from './Header';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer';

function App() {
  return (
    <Router>
    <Nav/>
    <Header />
    <h1> lisin</h1>
    <Footer/>
    </Router>
  );
}

export default App;
